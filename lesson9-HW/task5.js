const users = [
{name: "Sunny", email: "terest@test.com", age:28 },
{name: "Oleh", email: "terest2@test.com", age:29 },
{name: "Irina", email: "terest3@test.com", age:30 }
];

for (let { name, email, age } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
