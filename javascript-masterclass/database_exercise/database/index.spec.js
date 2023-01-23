const createDatabase = require(".")

describe('database', () => {
  test('create table', () => {
    const db = createDatabase();
    db.execute(
      "create table author (id number, name string, age number, city string, state string, country string)"
    );
    db.execute(
      "create table book (id number, name string, age number, city string, state string, country string)"
    );
    console.log(db.tables);
  })
})