
const createCommand = require('./commands/create');
const insertCommand = require("./commands/insert");
const selectCommand = require("./commands/select");



const createDatabase = () => {
  return {
    tables: {},
    execute: function (sql) {
      if (!sql) return;
      if (sql.startsWith('create table')) {
        return this.createTable(sql);
      } else if (sql.startsWith('insert into')) {
        return this.insert(sql);
      } else if (sql.startsWith('select')) {
        return this.select(sql);
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
    select: function (sql) {
      const { tableName, columns, conditions } = selectCommand(sql);
      return this.tables[tableName].data
        .filter((row) => {
          if (!conditions) return true;
          const [key, value] = conditions;
          return row[key] === value
        })
        .map(row => {
          const data = {};
          for(const c of columns) {
            data[c] = row[c]
          }
          return data;
        });
    }
  };
}

module.exports = createDatabase