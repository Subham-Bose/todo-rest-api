import { Router } from "express";
import { create, getAll } from "./todo.controller.js";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Todos
 *   description: Todo management APIs
 */

/**
 * @swagger
 * /todos:
 *   post:
 *     summary: Create a new Todo
 *     tags: [Todos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *     responses:
 *       201:
 *         description: Todo created
 */
router.post("/", create);

/**
 * @swagger
 * /todos:
 *   get:
 *     summary: Get all Todos
 *     tags: [Todos]
 *     responses:
 *       200:
 *         description: List of todos
 */
router.get("/", getAll);

// /**
//  * @swagger
//  * /todos/{id}:
//  *   put:
//  *     summary: Update a Todo
//  *     tags: [Todos]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *     responses:
//  *       200:
//  *         description: Todo updated
//  */
// router.put("/:id", update);

// /**
//  * @swagger
//  * /todos/{id}:
//  *   delete:
//  *     summary: Delete a Todo
//  *     tags: [Todos]
//  *     responses:
//  *       204:
//  *         description: Todo deleted
//  */
// router.delete("/:id", remove);

export default router;
