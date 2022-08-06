interface Todo {
  id: number;
  todo: string;
  completed: false;
  createdAt: string;
}

// variables
const form = document.querySelector("form");
const input = document.querySelector("#input") as HTMLInputElement;
const list = document.querySelector("ul");
//event listener on form
form?.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "") alert("Input cannot be null");

  //create new todo
  const newTodo: Todo = {
    id: new Date().getTime(),
    todo: input.value,
    completed: false,
    createdAt: new Date().toDateString(),
  };

  addTodo(newTodo);
  input.value = "";
});

const addTodo = (todo: Todo) => {
  //create list item
  const listItem = document.createElement("li");
  const div = document.createElement("div");

  //name
  const name = document.createElement("p");
  name.textContent = todo.todo;

  //checkbox
  const check = document.createElement("input");
  check.textContent = "completed";
  check.checked = todo.completed;
  check.type = "checkbox";

  //date
  const date = document.createElement("p");
  date.textContent = todo.createdAt;

  listItem.append(check, name, date);

  //   listItem.appendChild(l);
  listItem?.classList.add("todo");

  list?.append(listItem);
};
