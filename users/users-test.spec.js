const db = require("../config/dbConfig");
const request = require("supertest");
const server = require("../api/server");
const getType = require("jest-get-type");

describe("GET /users", () => {
  it("it should return data in json format", async () => {
    const response = await request(server).get("/api/users");
    expect(getType(response)).toBe("object");
  });
});

describe("GET /users", function() {
  it("responds with json", function(done) {
    request(app)
      .get("/users")
      .auth("username", "password")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("GET /users/:id", function() {
  it("respond with json containing a single user", function(done) {
    request(server)
      .get("/api/users/3")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

describe("POST /register", () => {
  beforeEach(async () => {
    await db("user").truncate();
  });

  it("should save new user name to database", async () => {
    const newUsers = await request(server)
      .post("/api/register")
      .send({ username: "jackbird", password: "password", role: "operator" });
    expect(newUsers.body.username).toMatch("jackbird");
  });

  it("should return a status of 201", async () => {
    const response = await request(server)
      .post("/api/register")
      .send({ username: "Joe", password: "123Go", role: "diner" });
    expect(response.status).toBe(201);
  });
});
