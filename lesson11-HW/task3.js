async function fetchTodo() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const body = await response.json();
    return body;
  } catch (error) {
    console.error (error);
  }
}

async function fetchUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const body = await response.json();
    return body;
  } catch (error) {
    console.error (error);
  }
}

async function main() {
  try {
    const [todo, user] = await Promise.all([fetchTodo(), fetchUser()]);
    console.log("todo:", todo);
    console.log("user:", user);

    const firstResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log("Promise.race:", firstResult);

  } catch (error) {
    console.error("Помилка у main:", error);
  }
}
main();