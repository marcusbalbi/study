const command = (sql) => {
  if (!sql || typeof sql !== "string") return buildResult(null, []);
  if (!sql.startsWith("delete from")) buildResult(null, []);

  const regexp = /delete from ([a-z]+)(?: where (.+))?/;
  const parsedStatement = sql.match(regexp);
  let [, tableName, conditions] = parsedStatement;

  conditions = conditions ? conditions.split("=").map((c) => c.trim()) : null;
  return buildResult(tableName, conditions);
};

const buildResult = (tableName, conditions) => {
  return {
    tableName,
    conditions,
  };
};

module.exports = command;
