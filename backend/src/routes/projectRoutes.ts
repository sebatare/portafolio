import { Router } from "express";
import {
  getProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} from "../controllers/projectControllers";

const router = Router();

router.get("/", getProjects);
router.get("/:uuid", getProjectById);
router.post("/", createProject);
router.put("/:uuid", updateProject);
router.delete("/:uuid", deleteProject);

export default router;
