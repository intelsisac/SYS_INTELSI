
// En un archivo separado, por ejemplo, database.js
function connectToMySQL() {
  var server = 'jhaimer.com';
  var dbName = 'jhaimerc_intelsi';
  var username = 'jhaimerc_intelsi';
  var password = 'intelsi2024#';
  var port = 3306;

  var url = 'jdbc:mysql://' + server + ':' + port + '/' + dbName;

  try {
    var conn = Jdbc.getConnection(url, username, password);
    return conn;
  } catch (e) {
    Logger.log('Error en connectToMySQL: ' + e);
    throw e;
  }
}
