import type { Application } from "express";

const express = require("express");

const app: Application = express();

const PORT = Number(process.env.PORT ?? 3000);

const isInvalid = !Number.isInteger(PORT) || PORT < 1 || PORT > 65535;

if (isInvalid) {
  console.log("Environment variable does not contain a valid port number");
  process.exit(1);
}

app.all("/{*splat}", (_req, res) => {
  res.send("Hello, World!\n");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})