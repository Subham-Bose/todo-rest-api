import { createTodo, getAllTodos } from "./todo.service.js";
import { todoResponse } from "./todo.mapper.js";

/**
 * CREATE
 */
export const create = async (req, res) => {
  debugger;

  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const todo = await createTodo({
    title: req.body.title,
    userId: req.user.id, // now plain string is OK
  });

  res.status(201).json(todo);
};
/**
 * GET ALL (by user)
 */
export const getAll = async (req, res) => {
  const todos = await getAllTodos(req.user.id);
  res.json(todos.map(todoResponse));
};

// /**
//  * UPDATE
//  */
// export const update = async (req, res) => {
//   const todo = await updateTodo(req.params.id, req.user.id, req.body);

//   if (!todo) {
//     return res.status(404).json({ message: "Todo not found" });
//   }

//   res.json(toResponse(todo));
// };

// /**
//  * DELETE
//  */
// export const remove = async (req, res) => {
//   await deleteTodo(req.params.id, req.user.id);
//   res.status(204).send();
// };
