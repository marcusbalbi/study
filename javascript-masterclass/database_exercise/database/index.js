
const createCommand = require('./commands/create');
const insertCommand = require("./commands/insert");



const createDatabase = () => {
  return {
    tables: {},
    execute: function (sql) {
      if (!sql) return;
      if (sql.startsWith('create table')) {
        return this.createTable(sql);
      } else if (sql.startsWith('insert into')) {
        return this.insert(sql);
      }
    },
    insert: function (sql) {
      const { tableName, data } = insertCommand(sql);

      this.tables[tableName].data.push(data);
      return data.length;
    },
    createTable: function (sql) {
      const { tableName, columns } = createCommand(sql);
      this.tables[tableName] = {
        columns,
        data: [],
      };
    },
  };
}

module.exports = createDatabase