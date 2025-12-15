export class Todo {
  constructor(id, title, completed, userId, createdAt, updatedAt) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.userId = userId;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
