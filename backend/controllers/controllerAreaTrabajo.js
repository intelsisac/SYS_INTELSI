function createAreaTrabajo(nombreAreaTrabajo) {
    var conn = connectToMySQL();
    var stmt = conn.prepareStatement('INSERT INTO AreaTrabajo (nombreAreaTrabajo) VALUES (?)');
    stmt.setString(1, nombreAreaTrabajo);
    stmt.executeUpdate();
    stmt.close();
    conn.close();
    return "Registro creado";
  }
  
  function readAreaTrabajo() {
    var conn = connectToMySQL();
    var stmt = conn.createStatement();
    var results = stmt.executeQuery('SELECT * FROM AreaTrabajo');
    var areasTrabajos = [];
  
    while (results.next()) {
      var areaTrabajo = {
        idAreaTrabajo: results.getInt('idAreaTrabajo'),
        nombreAreaTrabajo: results.getString('nombreAreaTrabajo'),
      };
      areasTrabajos.push(areaTrabajo);
    }
  
    results.close();
    stmt.close();
    conn.close();
  
    return areasTrabajos;
  }
  
  function updateAreaTrabajo(idAreaTrabajo, nombreAreaTrabajo) {
    var conn = connectToMySQL();
    var stmt = conn.prepareStatement('UPDATE AreaTrabajo SET nombreAreaTrabajo = ? WHERE idAreaTrabajo = ?');
    stmt.setString(1, nombreAreaTrabajo);
    stmt.setInt(2, idAreaTrabajo);
    stmt.executeUpdate();
    stmt.close();
    conn.close();
    return "Registro actualizado";
  }
  
  function deleteAreaTrabajo(idAreaTrabajo) {
    var conn = connectToMySQL();
    var stmt = conn.prepareStatement('DELETE FROM AreaTrabajo WHERE idAreaTrabajo = ?');
    stmt.setInt(1, idAreaTrabajo);
    stmt.executeUpdate();
    stmt.close();
    conn.close();
    return "Registro eliminado";
  }
  