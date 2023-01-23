const command = (sql) => {
  if (!sql || typeof sql !== "string") return null;
  if (!sql.startsWith("create table")) return null;

  const tableName = _extractTableName(sql);
  const columns = _extractColums(sql);

  return { tableName, columns };
};

const _extractTableName = (sql) => {
  const regexCreate = /^create table ([\w]+).*$/;
  const result = regexCreate.exec(sql);
  return result && result.length > 0 && result[1];
};

const _extractColums = (sql) => {
  const regexCreate = /\(([\w]* [\w]*,?)+\)/;
  const result = regexCreate.exec(sql);
  if (!result) return null;
  return result[0]
    .replace(/(\(|\))/g, "")
    .split(",")
    .map((c) => c.trim())
    .map((c) => {
      const [name, type] = c.split(" ");
      return {name, type}
    });
};

module.exports = command;
