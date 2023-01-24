const command = require("./select");
describe("select command", () => {
  test("select command", () => {
    const sql = `select name, age from author`;
    const response = command(sql);
    expect(response.tableName).toBe("author");
    expect(response.columns).toStrictEqual(['name', 'age']);
    expect(response.conditions).toBeNull();
  });
  test("select command with where", () => {
    const sql = `select name, age from author where id = 1`;
    const response = command(sql);
    expect(response.tableName).toBe("author");
    expect(response.columns).toStrictEqual(['name', 'age']);
    expect(response.conditions).toStrictEqual(['id', '1']);
  });
});
