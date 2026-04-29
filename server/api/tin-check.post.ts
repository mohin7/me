import { createHash } from 'node:crypto'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'

let auditCache: Record<string, object> | null = null

async function getAudit() {
  if (auditCache) return auditCache
  const filePath = join(process.cwd(), 'public', 'audit.json')
  const raw = await readFile(filePath, 'utf-8')
  auditCache = JSON.parse(raw)
  return auditCache!
}

export default defineEventHandler(async (event) => {
  const { tin } = await readBody<{ tin: string }>(event)

  if (!tin || !/^\d{12}$/.test(tin)) {
    throw createError({ statusCode: 400, message: 'Invalid TIN format' })
  }

  const config = useRuntimeConfig()
  const hash = createHash('sha256').update(config.tinSalt + tin).digest('hex')

  const audit = await getAudit()
  const entry = audit[hash]

  return { found: !!entry, ...(entry ? (entry as object) : {}) }
})
