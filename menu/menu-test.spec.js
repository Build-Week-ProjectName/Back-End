const db = require("../database/dbConfig");
const menu = require("./menu-router");
const menuModel = require("./menu-model");
const request = require("supertest");
const server = require("../api/server");

describe("menu-model.js", () => {
  beforeEach(async () => {
    await db("menu").truncate();
  });

  describe("inserts menu", () => {
    it("inserts menu into database", async () => {
      const menuModel = await db("menu");
      expect("menuModel").toHaveLength(3);
    });
  });
});

describe("GET /menu", () => {
  it("it should return data in json format", async () => {
    const response = await request(server).get("/api/menu");
    expect(getType(response)).toBe("object");
  });
});
