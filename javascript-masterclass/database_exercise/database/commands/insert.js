const command = (sql) => {
  if (!sql || typeof sql !== "string") buildResult(null, []);
  if (!sql.startsWith("insert into")) buildResult(null, []);

  const tableName = _extractTableName(sql);
  const columns = _extractColums(sql);
  const values = _extractValues(sql);
  const data = {};
  for (let i = 0; i < columns.length; i++) {
    data[columns[i]] = values[i];
  }
  return { tableName, data, columns, values };
};

const _extractTableName = (sql) => {
  const regexCreate = /^insert into ([\w]+).*$/;
  const result = regexCreate.exec(sql);
  return result && result.length > 0 && result[1];
};

const _extractColums = (sql) => {
  const regexColumns = /\((.*?)\)/;
  const result = sql.match(regexColumns)
  if (!result) return null;
  return result[1].split(",").map((c) => c.trim());
};

const _extractValues = (sql) => {
  const regexColumns = /values \((.*?)\)/;
  const result = sql.match(regexColumns)
  if (!result) return null;
  return result[1].split(",").map((v) => v.trim());
};

const buildResult = (table, data) => {
  return {
    tableName: table,
    data,
  };
};

module.exports = command;
