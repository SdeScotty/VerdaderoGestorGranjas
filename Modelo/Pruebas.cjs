var mysql = require("mysql");
var conexion = mysql.createConnection({
    host: "localhost",
    database: "granjas",
    user: "root",
    password: ""
});

function getConexion() {
    conexion.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return this.conexion;
}

function getMaquinas() {
    let conexion = getConexion();
    console.log(conexion);
    let maquinas = conexion.query("SELECT * FROM maquina", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
      console.log(maquinas);
    return maquinas;
  }

  function getMaquinaPorNumSerie(numSerie) {

  }

  function getMaquinaPorUsuario(nombreUsuario) {

  }

  function getMaquinaPorGranja() {

  }

  getMaquinas();