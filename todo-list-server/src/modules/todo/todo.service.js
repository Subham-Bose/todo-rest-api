// import TodoEntity from "./todo.mongo.model.js";
import { randomUUID } from "crypto";

const todos = [];

export const createTodo = async ({ title, userId }) => {
  const todo = {
    id: randomUUID(),
    title,
    completed: false,
    userId,
    createdAt: new Date(),
  };
  todos.push(todo);
  return todo;
};

export const getAllTodos = async (userId) => {
  return todos.filter((t) => t.userId === userId);
};

// export const updateTodo = async (id, userId, data) => {
//   const doc = await TodoEntity.findOneAndUpdate({ _id: id, userId }, data, {
//     new: true,
//   });
//   return toDomain(doc);
// };

// export const deleteTodo = async (id, userId) => {
//   await TodoEntity.findOneAndDelete({ _id: id, userId });
// };
