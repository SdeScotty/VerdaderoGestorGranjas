var mysql = require("mysql");
var datosConexion = mysql.createConnection({
    host: "localhost",
    database: "granjas",
    user: "root",
    password: ""
});
/*
function getConexion() {
    conexion.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
    });
    return this.conexion;
}

function getMaquinas() {
    let conexion = datosConexion.connect(function(err) {
        if (err) throw err;
        console.log("Conectado");
    })
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

  //getMaquinas();
  */
 /*
  const mysql = require('mysql');

  // Configuración de la conexión a la base de datos
  const connection = mysql.createConnection({
    host: 'localhost', // Cambia esto a la dirección de tu servidor MySQL
    user: 'root',   // Cambia esto al usuario de tu base de datos
    password: '', // Cambia esto a la contraseña de tu usuario
    database: 'granjas'  // Cambia esto al nombre de tu base de datos
  });*/
  
  // Conectar a la base de datos



function conectar() {
    return new Promise((resolve, reject) => {
        datosConexion.connect((err) => {
            if (err) {
                console.error('Error al conectar a la base de datos:', err);
                reject(err);
                return;
            }
            console.log('Conexión exitosa a la base de datos.');
            resolve();
        });
    });
}

function getConexion() {
    return new Promise((showMensajeConexionExitosa, showMensajeConexionFallida) => {
        datosConexion.connect((error) => {
            if (error) {
                showMensajeConexionFallida("Fallo conectando");
            } else {
                showMensajeConexionExitosa("Conexión exitosa");
            }
        });
    });
}

function getPromiseMaquinas() {
    return new Promise((resolve, reject) => {
        datosConexion.query("SELECT * FROM maquina", (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
}

async function getMaquinas() {
    try {
        await getConexion();
        const maquinas = await getPromiseMaquinas();
        console.log('Maquinas:', maquinas);
        datosConexion.end();
    } catch (error) {
        console.error('Error:', error);
    }
}

getMaquinas();