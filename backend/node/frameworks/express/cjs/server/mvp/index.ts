import type { Application } from 'express'

const express = require('express')

const app: Application = express()

const PORT = Number(process.env.PORT ?? 3000)

app.all('/{*splat}', (_req, res) => {
  res.send('Hello, World!\n');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})