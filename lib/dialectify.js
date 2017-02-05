const swabian = require('./dialects/swabian');
const chinese = require('./dialects/chinese');

function _getDialect(dialect) {
  switch (dialect) {
    case 'schwäbisch':  return swabian;
    case 'chinesisch': return chinese;
  }
  return (text) => text;
}

function dialectify(dialect, text) {
  try{
    return _getDialect(dialect)(text);
  } catch(err) {
    console.error(`could not dialectify text for: ${dialect}`);
    return text;
  }
}

module.exports = dialectify;
