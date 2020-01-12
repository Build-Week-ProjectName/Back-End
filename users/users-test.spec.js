const db = require("../config/dbConfig");
const request = require("supertest");
const server = require("../api/server");

describe("GET /api/users", function() {
  it("responds with json", function(done) {
    request(server)
      .get("/api/users")
      .auth("username", "password", "email", "role", "firstName", "lastName")
      .set("accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /api/users/:id", function() {
  it("respond with json containing a single user", function(done) {
    request(server)
      .get("/api/users/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /api/auth/register", () => {
  beforeEach(async () => {
    await db("user").truncate();
  });

  it("should return a status of 200", async () => {
    const response = await request(server)
      .get("/api/auth/register")
      .send({
        username: "Joe",
        password: "123Go",
        role: "diner",
        email: "joe@gmail.com",
        firstName: "Joe",
        lastName: "Bo"
      });
    expect(response.status).toBe(200);
  });
});
