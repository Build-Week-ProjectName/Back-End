const request = require("supertest");
const server = require("../api/server.js");
const getType = require("jest-get-type");

describe("GET /trucks", () => {
  it("it should return data in json format", async () => {
    const response = await request(server).get("/api/trucks");
    expect(getType(response)).toBe("object");
  });
});
