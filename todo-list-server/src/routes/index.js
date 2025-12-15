import { Router } from "express";
import todoRoutes from "../modules/todo/todo.routes.js";

const router = Router();

router.use("/todos", todoRoutes);

export default router;
