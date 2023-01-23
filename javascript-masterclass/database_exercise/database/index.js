
const createCommand = require('./commands/create');



const createDatabase = () => {
  return {
    tables: [],
    execute: function (sql) {
      return this.createTable(sql);
    },
    createTable: function (sql) {
      const { tableName, columns } = createCommand(sql);
      this.tables[tableName] = {
        columns,
      };
    }
  };
}

module.exports = createDatabase