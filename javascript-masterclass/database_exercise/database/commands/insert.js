const command = (sql) => {
  if (!sql || typeof sql !== "string") buildResult(null, []);
  if (!sql.startsWith("insert into")) buildResult(null, []);

  const [tableName, columns, values] = _extract(sql);
  const data = {};
  for (let i = 0; i < columns.length; i++) {
    data[columns[i]] = values[i];
  }
  return { tableName, data, columns, values };
};

const _extract = (sql) => {
  const regexp = /insert into ([a-z]+) \((.+)\) values \((.+)\)/;
  const parsedStatement = sql.match(regexp);
  let [, tableName, columns, values] = parsedStatement;

  columns = columns.split(',').map(c => c.trim())
  values = values.split(",").map((v) => v.trim());

  return [tableName, columns, values];
}

const buildResult = (table, data) => {
  return {
    tableName: table,
    data,
  };
};

module.exports = command;
