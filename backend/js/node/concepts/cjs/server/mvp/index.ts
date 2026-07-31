import type { IncomingMessage, ServerResponse } from 'node:http'

const http = require('node:http')

const PORT = Number(process.env.PORT ?? 3000)

const isInvalid = !Number.isInteger(PORT) || PORT < 1 || PORT > 65535

if (isInvalid) {
  console.log('Environment variable does not contain a valid port number')
  process.exit(1)
}

const server = http.createServer((_req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello, World!\n')
})

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})