mysql = require("mysql");
class Conexion {
    static conexion = mysql.createConnection({
        host: "localhost",
        database: "granjas",
        user: "root",
        password: ""
    });
    static conectar() {
        return new Promise((resolve, reject) => {
            this.conexion.connect((err) => {
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
    static con() {
        return new Promise((resolve, reject) => {
            this.conexion.connect((error) => {
                if (error) {
                    throw error;
                } else {
                    console.log("Conexion hecha");
                }
            })
        });
    }
}

module.exports = Conexion;
Conexion.con();