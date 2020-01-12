const request = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");

describe("clear out database on each test", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });
});

describe("server.js", () => {
  describe("environment", () => {
    it("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});
