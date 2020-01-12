// const request = require("supertest");
// const server = require("./server");

describe("server.js", () => {
  describe("environment", () => {
    it("should set environment to testing", () => {
      expect(process.env.DB_ENV).toBe("testing");
    });
  });
});

