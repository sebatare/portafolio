import { Request, Response } from "express";
import crypto from "crypto";
import pool from "../db";

export const getProjects = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(`SELECT * FROM "project" ORDER BY "createDate" DESC`);
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los proyectos" });
  }
};

export const getProjectById = async (req: Request, res: Response) : Promise<void> =>{
  try {
    const { uuid } = req.params;
    const result = await pool.query(`SELECT * FROM "project" WHERE uuid = $1`, [uuid]);
    if (result.rows.length === 0) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }
    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener el proyecto" });
  }
};

export const createProject = async (req: Request, res: Response) => {
  try {
    const { name, url, description } = req.body;
    const uuid = crypto.randomUUID();

    const result = await pool.query(
      `INSERT INTO "project" (uuid, name, url, description, "createDate", "updateDate")
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`,
      [uuid, name, url, description ?? null]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al crear el proyecto" });
  }
};

export const updateProject = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { uuid } = req.params;
    const { name, url, description } = req.body;

    const result = await pool.query(
      `UPDATE "project" SET
         name = COALESCE($1, name),
         url = COALESCE($2, url),
         description = COALESCE($3, description),
         "updateDate" = CURRENT_TIMESTAMP
       WHERE uuid = $4
       RETURNING *`,
      [name, url, description, uuid]
    );

    if (result.rows.length === 0) {
      res.status(404).json({ message: "Proyecto no encontrado" });
      return;
    }

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar el proyecto" });
  }
};

export const deleteProject = async (req: Request, res: Response) : Promise<void> => {
  try {
    const { uuid } = req.params;
    const result = await pool.query(`DELETE FROM "project" WHERE uuid = $1`, [uuid]);
    if (result.rowCount === 0) {
       res.status(404).json({ message: "Proyecto no encontrado" });
       return;
    }
    res.json({ message: "Proyecto eliminado" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar el proyecto" });
  }
};
