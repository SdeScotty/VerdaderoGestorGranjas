import Conexion from "./Conexion.cjs";
export default class MaquinaDAO {
  static getMaquinas() {
    let conexion = Conexion.getConexion();
    let maquinas = conexion.query("SELECT * FROM maquina", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    return maquinas;
  }

  getMaquinaPorNumSerie(numSerie) {

  }

  getMaquinaPorUsuario(nombreUsuario) {

  }

  getMaquinaPorGranja() {

  }
}

MaquinaDAO.getMaquinas();