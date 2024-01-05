[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Testing To-Do Express API with Jest and Supertest

## Setting up the app

You can begin using the lab by following these steps:

1. Open your terminal.
2. To access the `mef` directory, please navigate to it from your home directory using the command `cd ~/mef`.
3. Fork the repository
   named [todo-express-api-testing-with-supertest](https://git.generalassemb.ly/ModernEngineering/todo-express-api-testing-with-supertest)
   on the GitHub website.
4. Click the "Fork" button in the upper right corner of the repository page. This will create a copy of the repository
   under your own GitHub account.
5. After forking, you'll have your own copy of the repository under your GitHub account.
    - Copy the URL of your forked repository, which will look
      like: `https://github.com/YourUsername/todo-express-api-testing-with-supertest.git`.
6. Now clone the repository using the SSH URL.
7. To switch your current directory from `mef` to `todo-express-api-testing-with-supertest/todo-app`, execute the
   command: `cd
   todo-express-api-testing-with-supertest/todo-app`.
8. To reset the existing database using the `psql` command, you can use the following command: `psql -U postgres -d
   todo_app_db < db/todo.sql`.
9. You can use the `npm install` command to install all the dependencies listed in the `package.json`.
10. Please run the command `nodemon index.js` in your terminal and ensure that you can view the "Hi There" output
    at [http://localhost:3001](http://localhost:3001).
11. You can halt the server by interrupting the terminal using `CTRL+C` and then proceed to execute `npm run test`.

If everything is set up correctly, you should expect to receive an output similar to the following:

```text
> todo-app@1.0.0 test
> jest

 PASS  tests/index.test.js
  Test the root path
    ✓ It should respond with "Hello World!" (27 ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.824 s, estimated 1 s
Ran all test suites.
```

## Endpoint Testing

- Create (POST): Write a test to create a new todo item by sending a POST request to the `/api/todos` endpoint. Ensure
  that the todo is correctly added to the database, and the response contains the newly created todo.
- Read (GET): Write a test to retrieve a list of all todos by sending a GET request to the `/api/todos` endpoint. Verify
  that the response status code is `200`, and the response body contains a list of todos.
- Read (GET by ID): Write a test to retrieve a specific todo item by sending a GET request to the `/api/todos/:id`
  endpoint, where `:id` is the ID of a specific todo. Ensure that the response contains the correct todo based on the
  provided ID.
- Update (PUT): Write a test to update a todo item by sending a PUT request to the `/api/todos/:id` endpoint, where :id is
  the ID of a specific todo. Verify that the todo is correctly updated in the database, and the response indicates the
  successful modification.
- Delete (DELETE): Write a test to delete a todo item by sending a DELETE request to the `/api/todos/:id` endpoint,
  where `:id` is the ID of a specific todo. Confirm that the todo is removed from the database, and the response status
  code is `204` (No Content).
