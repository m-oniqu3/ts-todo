interface Todo {
  id: number;
  todo: string;
  completed: boolean;
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
  const name = document.createElement("label");
  name.textContent = todo.todo;

  //checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  checkbox.addEventListener("change", () => {
    //set todo to the state of the checkbox
    todo.completed = checkbox.checked;
    listItem.classList.toggle("complete");
  });

  //date
  const date = document.createElement("p");
  date.textContent = todo.createdAt;

  //button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete");

  //add todo items to div then list item
  div.append(checkbox, name, date);
  listItem.append(div, deleteButton);
  listItem?.classList.add("todo");

  //add list item to the list
  list?.append(listItem);
};
