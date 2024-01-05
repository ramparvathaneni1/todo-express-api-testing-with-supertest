const request = require("supertest");
const {app, server, pool} = require("../index");

describe("Test the root path", () => {
    test('It should respond with "Hello World!"', async () => {
        const response = await request(app).get("/");
        expect(response.text).toBe("Hi There");
        expect(response.statusCode).toBe(200);
    });
});

// TODO Test the CREATE (POST) endpoint

// TODO Test the READ (GET all) endpoint

// TODO Test the READ (GET by ID) endpoint

// TODO Test the DELETE endpoint

afterAll((done) => {
    // Closing the connection allows Jest to exit successfully.
    server.close();
    pool.end();
    done();
});