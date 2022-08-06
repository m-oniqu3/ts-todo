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

  //add todo to the array
  const items: Todo[] = [];
  items.unshift(newTodo);

  addTodo(items);

  //clear input
  input.value = "";
});

//add todo to the list
const addTodo = (items: Todo[]) => {
  items.map((item) => {
    //create li and div elements
    const listItem = document.createElement("li");
    const div = document.createElement("div");

    //create label and store todo in label
    const name = document.createElement("label");
    name.textContent = item.todo;

    //create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change", () => {
      //set todo to the state of the checkbox
      item.completed = checkbox.checked;
      listItem.classList.toggle("complete");
    });

    //date
    const date = document.createElement("p");
    date.textContent = item.createdAt;

    //button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete");

    //remove current list item
    deleteButton.addEventListener("click", () => {
      list?.removeChild(listItem);
    });

    //add todo items to div then list item
    div.append(checkbox, name, date);
    listItem.append(div, deleteButton);
    listItem?.classList.add("todo");

    //add list item to the list
    list?.append(listItem);
  });
};
