# Todo API

A RESTful Todo API built with **Node.js** and **Express**, designed with a clean and modular architecture.
The current implementation uses an **in-memory data store** for simplicity during development.
Persistent storage using **MongoDB** will be added in a future update.

---

## 🚀 Features

- Create, read, update, and delete Todos
- Simple user context via middleware (for development)
- Modular routing and controller structure
- In-memory storage (no database required)
- Ready for MongoDB integration
- API debugging support with VS Code

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- JavaScript (ES Modules)
- VS Code Debugger

_(MongoDB will be added later)_

---

## 📦 Project Structure

```text
src/
├── app.js
├── server.js
├── routes/
│   └── index.js
├── modules/
│   └── todo/
│       ├── todo.routes.js
│       ├── todo.controller.js
│       ├── todo.service.js
|       ├── todo.mapper.js
|       ├── todo.model.js
|       ├── todo.service.js
|       └── todo.mongo.model.js
└── middleware/
    └── devUserMiddleware.js
```
