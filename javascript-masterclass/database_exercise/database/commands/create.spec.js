const command = require("./create.js");
describe("create command", () => {
  test("create command", () => {
    const sql = `create table author (id number, name string, age number, city string, state string, country string)`;
    const response = command(sql);
    expect(response.tableName).toBe("author");
    expect(response.columns.length).toBe(6);
  });
});
