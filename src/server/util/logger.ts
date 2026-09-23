const serializeMeta = (meta: unknown): string => {
  if (!meta) return ''
  if (meta instanceof Error) return ` ${meta.stack || meta.message}`
  if (typeof meta === 'object' && Object.keys(meta).length === 0) return ''

  return ` ${JSON.stringify(meta)}`
}

const log =
  (level: string, out: (message: string) => void) =>
  (message: string, meta?: unknown) => {
    out(
      `${new Date().toISOString()} ${level}: ${message}${serializeMeta(meta)}`
    )
  }

const logger = {
  info: log('info', console.log), // eslint-disable-line no-console
  warn: log('warn', console.warn), // eslint-disable-line no-console
  error: log('error', console.error), // eslint-disable-line no-console
}

export default logger
