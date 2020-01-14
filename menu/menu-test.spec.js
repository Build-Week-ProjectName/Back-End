const db = require("../config/dbConfig");
const request = require("supertest");
const server = require("../api/server");

describe("menu-model.js", () => {
  beforeEach(async () => {
    await db("menu").truncate();
  });

  describe("inserts menu", () => {
    it("inserts menu into database", async () => {
      const menuModel = await db("menu");
      expect(menuModel).toHaveLength(0);
    });
  });
});

describe("GET /api/menu/", function() {
  it("all menu", function(done) {
    request(server)
      .get("/api/menu/")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});

// describe("GET /api/menu/:id", function() {
//   it("get a single menu", function(done) {
//     request(server)
//       .get("/api/menu/2")
//       .set("Accept", "application/json")
//       .expect("Content-Type", /json/)
//       .expect(200, done);
//   });
// });
