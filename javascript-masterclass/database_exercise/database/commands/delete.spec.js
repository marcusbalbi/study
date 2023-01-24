const command = require("./delete.js");
describe("delete command", () => {
  test("delete command", () => {
    const sql = `delete from author where id = 2`;
    const response = command(sql);
    expect(response.tableName).toBe("author");
    expect(response.conditions).toStrictEqual(['id', '2']);
  });
});
