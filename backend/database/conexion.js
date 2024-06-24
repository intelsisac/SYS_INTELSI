// En un archivo separado, por ejemplo, database.js
function connectToMySQL() {
  var server = 'jhaimer.com';
  var dbName = 'jhaimerc_intelsi';
  var username = 'jhaimerc_intelsi';
  var password = 'intelsi2024#';
  var port = 3306;

  var url = 'jdbc:mysql://' + server + ':' + port + '/' + dbName;

  try {
    return Jdbc.getConnection(url, username, password);
  } catch (e) {
    Logger.log('Error en connectToMySQL: ' + e);
    throw new Error('Error en connectToMySQL: ' + e);
  }
}

function executeQuery(query, callback) {
  // Validar que la consulta sea una cadena no vacía
  if (typeof query !== 'string' || query.trim() === '') {
    throw new Error('Invalid SQL query');
  }

  var conn = null;
  var stmt = null;
  var results = null;

  try {
    // Establecer conexión a la base de datos MySQL
    conn = connectToMySQL();

    // Crear una declaración (statement) para ejecutar la consulta SQL
    stmt = conn.createStatement();

    // Ejecutar la consulta SQL y obtener los resultados
    results = stmt.executeQuery(query);

    // Llamar a la función de callback para procesar los resultados
    return callback(results);
  } catch (e) {
    // Capturar y registrar cualquier error
    Logger.log('Error en executeQuery: ' + e);
    throw new Error('Error en executeQuery: ' + e);
  } finally {
    // Asegurarse de cerrar todos los recursos (resultados, declaración y conexión)
    if (results) results.close();
    if (stmt) stmt.close();
    if (conn) conn.close();
  }
}

// Ejemplo de función para obtener datos de una tabla
function obtenerDatos(nombreTabla) {
  try {
    var query = "SELECT * FROM " + nombreTabla;
    var data = executeQuery(query, function(results) {
      var metaData = results.getMetaData();
      var numCols = metaData.getColumnCount();
      var data = [];

      while (results.next()) {
        var row = {};
        for (var i = 1; i <= numCols; i++) {
          row[metaData.getColumnName(i)] = results.getString(i);
        }
        data.push(row);
      }
      return data;
    });

    Logger.log('Datos de la tabla ' + nombreTabla + ': ' + JSON.stringify(data));
    return data;
  } catch (e) {
    Logger.log('Error al obtener datos de la tabla ' + nombreTabla + ': ' + e);
    throw new Error('Error al obtener datos de la tabla ' + nombreTabla + ': ' + e);
  }
}
