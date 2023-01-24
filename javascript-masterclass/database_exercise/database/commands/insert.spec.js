const command = require("./insert.js");
describe("insert command", () => {
  test("insert command", () => {
    const sql = `insert into author (id, name, age) values (1, Douglas Crockford, 62)`;
    const response = command(sql);
    expect(response.tableName).toBe("author");
    expect(response.data).toStrictEqual({
      id: "1",
      name: "Douglas Crockford",
      age: "62",
    });
  });
});
