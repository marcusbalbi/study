const { readCommand } = require('./create-table.js')
describe('read command', () => {
  test('read command', () => {
    const sql = `create table author (id number, name string, age number, city string, state string, country string)`;
    const response = readCommand(sql);
    console.log(response);
    expect(response.tableName).toBe('author');
    expect(response.columns.length).toBe(6);
  })
})