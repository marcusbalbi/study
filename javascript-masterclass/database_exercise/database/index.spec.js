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
  });

  test('insert row', () => {
    const database = createDatabase();
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");

    expect(database.tables.author.columns.length).toBe(6);
    expect(database.tables.author.data).toStrictEqual([
      { id: "1", name: "Douglas Crockford", age: "62" },
      { id: "2", name: "Linus Torvalds", age: "47" },
      { id: "3", name: "Martin Fowler", age: "54" },
    ]);
  });
  test('select', () => {
    const database = createDatabase();
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    let result = database.execute("select name, age from author");
    expect(result.length).toBe(3)
    result = database.execute("select name, age from author where id = 1");
    expect(result.length).toBe(1);
  })
  test('delete', () => {
    const database = createDatabase();
    database.execute("create table author (id number, name string, age number, city string, state string, country string)");
    database.execute("insert into author (id, name, age) values (1, Douglas Crockford, 62)");
    database.execute("insert into author (id, name, age) values (2, Linus Torvalds, 47)");
    database.execute("insert into author (id, name, age) values (3, Martin Fowler, 54)");
    database.execute("delete from author where id = 2");
    const result = database.execute("select name, age from author");
    expect(result).toStrictEqual([
      { name: "Douglas Crockford", age: "62" },
      { name: "Martin Fowler", age: "54" },
    ]);
  })
})