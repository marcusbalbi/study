const command = (sql) => {
  if (!sql || typeof sql !== "string") return {};
  if (!sql.startsWith("select ")) return {};

  const regexp = /select (.+) from ([a-z]+)(?: where (.+))?/;;
  const parsedStatement = sql.match(regexp);
  let [, columns, tableName, conditions] = parsedStatement;
  columns = columns.split(",").map((c) => c.trim());
  conditions = conditions ? conditions.split("=").map((c) => c.trim()) : null;
  return {tableName, columns, conditions};
  
};

module.exports = command;
