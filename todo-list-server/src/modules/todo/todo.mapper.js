import { Todo } from "./todo.model.js";

/**
 *
 * Converts MongoDB/Mongoose document to a Todo domain model.
 */
export const todoDomain = (todoDoc) => {
  if (!todoDoc) return null;

  return new Todo(
    todoDoc._id?.toString(),
    todoDoc.title,
    todoDoc.completed,
    todoDoc.userId,
    todoDoc.createdAt,
    todoDoc.updatedAt
  );
};

/**
 *
 * Converts a Todo domain model to a response object (DTO).
 */
export const todoResponse = (todo) => {
  if (!todo) return null;

  return {
    id: todo.id,
    title: todo.title,
    completed: todo.completed,
    userId: todo.userId,
    createdAt: todo.createdAt,
    updatedAt: todo.updatedAt,
  };
};
