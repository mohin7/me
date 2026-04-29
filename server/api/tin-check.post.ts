import { createHash } from 'crypto'

let auditCache: Record<string, object> | null = null

async function getAudit(): Promise<Record<string, object>> {
  if (auditCache) return auditCache
  const storage = useStorage('assets:data')
  auditCache = await storage.getItem<Record<string, object>>('audit.json') ?? {}
  return auditCache
}

export default defineEventHandler(async (event) => {
  const { tin } = await readBody<{ tin: string }>(event)

  if (!tin || !/^\d{12}$/.test(tin)) {
    throw createError({ statusCode: 400, message: 'Invalid TIN format' })
  }

  const config = useRuntimeConfig()
  const salt = config.tinSalt as string

  if (!salt) {
    throw createError({ statusCode: 500, message: 'Server misconfiguration' })
  }

  const hash = createHash('sha256').update(salt + tin).digest('hex')
  const audit = await getAudit()
  const entry = audit[hash]

  return { found: !!entry, ...(entry ? (entry as object) : {}) }
})
