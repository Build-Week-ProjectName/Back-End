const request = require("supertest");
const server = require("./server");
const db = require("../config/dbConfig");

describe("server.js", () => {
  describe("environment", () => {
    it("should set environment to testing", () => {
      expect(process.env.NODE_ENV).toBe("testing");
    });
  });
});
