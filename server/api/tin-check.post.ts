import { createHash } from 'crypto'

export default defineEventHandler(async (event) => {
  const { tin } = await readBody<{ tin: string }>(event)

  if (!tin || !/^\d{12}$/.test(tin)) {
    throw createError({ statusCode: 400, message: 'Invalid TIN format' })
  }

  const config = useRuntimeConfig()
  const salt = config.tinSalt as string

  if (!salt) {
    throw createError({ statusCode: 500, message: 'Server misconfiguration: missing TIN_SALT' })
  }

  const storage = useStorage('assets:server')
  const audit = await storage.getItem<Record<string, { zone: string; circle: string; type: string }>>('audit.json')

  if (!audit) {
    throw createError({ statusCode: 500, message: 'Audit data unavailable' })
  }

  const hash = createHash('sha256').update(salt + tin).digest('hex')
  const entry = audit[hash]

  return { found: !!entry, ...(entry ?? {}) }
})
