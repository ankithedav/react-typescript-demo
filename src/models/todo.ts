class Todo {
  id: string;
  text: string;

  constructor(textTodo: string) {
    this.id = new Date().toISOString();
    this.text = textTodo;
  }
}

export default Todo;
