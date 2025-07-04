import { Client } from "pg";
import fs from "fs";
import path from "path";
import dotenv from "dotenv";
import crypto from "crypto";

dotenv.config();

const client = new Client({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || "5432"),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

async function main() {
  await client.connect();

  // 👉 Crear tabla si no existe
  await client.query(`
    CREATE TABLE IF NOT EXISTS "project" (
      id SERIAL PRIMARY KEY,
      uuid UUID NOT NULL UNIQUE,
      name TEXT NOT NULL,
      description TEXT,
      url TEXT,
      "createDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updateDate" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
  `);
  console.log("Tabla project verificada o creada ✅");

  // 👉 Cargar datos desde JSON
  const dataPath = path.join(__dirname, "projects.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const projects = JSON.parse(rawData);

  // 👉 Insertar proyectos
  for (const project of projects) {
    const uuid = crypto.randomUUID();
    const { name, description, url } = project;

    await client.query(
      `INSERT INTO "project" (uuid, name, description, url, "createDate", "updateDate")
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)`,
      [uuid, name, description ?? null, url ?? null]
    );
    console.log(`✅ Proyecto insertado: ${name}`);
  }

  await client.end();
  console.log("Seed finalizado 🌱");
}

main().catch((err) => {
  console.error("❌ Error durante el seed:", err);
  client.end();
});
