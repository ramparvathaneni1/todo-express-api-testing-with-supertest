const request = require("supertest");
const {app, server} = require("../index");

describe("Test the root path", () => {
    test('It should respond with "Hello World!"', async () => {
        const response = await request(app).get("/");
        expect(response.text).toBe("Hi There");
        expect(response.statusCode).toBe(200);
    });
});

// TODO Test

afterAll((done) => {
    // Closing the connection allows Jest to exit successfully.
    server.close();
    done();
});
