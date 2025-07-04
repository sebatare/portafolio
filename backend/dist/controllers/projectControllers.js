"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.createProject = exports.getProjectById = exports.getProjects = void 0;
const crypto_1 = __importDefault(require("crypto"));
const db_1 = __importDefault(require("../db"));
const getProjects = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield db_1.default.query(`SELECT * FROM "project" ORDER BY "createDate" DESC`);
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener los proyectos" });
    }
});
exports.getProjects = getProjects;
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid } = req.params;
        const result = yield db_1.default.query(`SELECT * FROM "project" WHERE uuid = $1`, [uuid]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "Proyecto no encontrado" });
            return;
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ message: "Error al obtener el proyecto" });
    }
});
exports.getProjectById = getProjectById;
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, url, description } = req.body;
        const uuid = crypto_1.default.randomUUID();
        const result = yield db_1.default.query(`INSERT INTO "project" (uuid, name, url, description, "createDate", "updateDate")
       VALUES ($1, $2, $3, $4, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)
       RETURNING *`, [uuid, name, url, description !== null && description !== void 0 ? description : null]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ message: "Error al crear el proyecto" });
    }
});
exports.createProject = createProject;
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid } = req.params;
        const { name, url, description } = req.body;
        const result = yield db_1.default.query(`UPDATE "project" SET
         name = COALESCE($1, name),
         url = COALESCE($2, url),
         description = COALESCE($3, description),
         "updateDate" = CURRENT_TIMESTAMP
       WHERE uuid = $4
       RETURNING *`, [name, url, description, uuid]);
        if (result.rows.length === 0) {
            res.status(404).json({ message: "Proyecto no encontrado" });
            return;
        }
        res.json(result.rows[0]);
    }
    catch (error) {
        res.status(500).json({ message: "Error al actualizar el proyecto" });
    }
});
exports.updateProject = updateProject;
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { uuid } = req.params;
        const result = yield db_1.default.query(`DELETE FROM "project" WHERE uuid = $1`, [uuid]);
        if (result.rowCount === 0) {
            res.status(404).json({ message: "Proyecto no encontrado" });
            return;
        }
        res.json({ message: "Proyecto eliminado" });
    }
    catch (error) {
        res.status(500).json({ message: "Error al eliminar el proyecto" });
    }
});
exports.deleteProject = deleteProject;
