export default class Conexion {
    static mysql = require("mysql");
    static conexion = mysql.createConnection({
        host: "localhost",
        database: "granjas",
        user: "root",
        password: ""
    });

    static getConexion() {
        conexion.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
        });
        return this.conexion;
    }
}

