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

  // 👉 Crear tabla project
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

  // 👉 Crear tabla technology
  await client.query(`
    CREATE TABLE IF NOT EXISTS "technology" (
      id SERIAL PRIMARY KEY,
      name TEXT NOT NULL UNIQUE
    );
  `);

  // 👉 Crear tabla puente project_technology
  await client.query(`
    CREATE TABLE IF NOT EXISTS "project_technology" (
      project_id INTEGER REFERENCES "project"(id) ON DELETE CASCADE,
      technology_id INTEGER REFERENCES "technology"(id) ON DELETE CASCADE,
      PRIMARY KEY (project_id, technology_id)
    );
  `);

  console.log("Tablas creadas/verificadas ✅");

  // 👉 Insertar tecnologías base
  const techList = ["Next.js", "React", "Vue", "Node.js", "Python", ".NET", "PostgreSQL"];

  for (const tech of techList) {
    await client.query(
      `INSERT INTO "technology" (name)
       VALUES ($1)
       ON CONFLICT (name) DO NOTHING`,
      [tech]
    );
  }

  console.log("Tecnologías insertadas ✅");

  // 👉 Cargar datos desde projects.json
  const dataPath = path.join(__dirname, "projects.json");
  const rawData = fs.readFileSync(dataPath, "utf-8");
  const projects = JSON.parse(rawData);

  for (const project of projects) {
    const uuid = crypto.randomUUID();
    const { name, description, url, technologies = [] } = project;

    // 1. Insertar proyecto
    const result = await client.query(
      `INSERT INTO "project" (uuid, name, description, url, "createDate", "updateDate")
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING id`,
      [uuid, name, description ?? null, url ?? null]
    );

    const projectId = result.rows[0].id;
    console.log(`✅ Proyecto insertado: ${name}`);

    // 2. Insertar relaciones con tecnologías
    for (const techName of technologies) {
      const techResult = await client.query(
        `SELECT id FROM "technology" WHERE name = $1`,
        [techName]
      );

      if (techResult.rows.length > 0) {
        const techId = techResult.rows[0].id;
        await client.query(
          `INSERT INTO "project_technology" (project_id, technology_id)
           VALUES ($1, $2)
           ON CONFLICT DO NOTHING`,
          [projectId, techId]
        );
      } else {
        console.warn(`⚠️ Tecnología no encontrada: ${techName}`);
      }
    }
  }

  await client.end();
  console.log("Seed finalizado 🌱");
}

main().catch((err) => {
  console.error("❌ Error durante el seed:", err);
  client.end();
});
