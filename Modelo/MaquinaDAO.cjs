const Conexion = require('./Conexion.cjs');
const MaquinaVO = require('./MaquinaVO.cjs');
class MaquinaDAO {
  static getPromiseMaquinas() {
    return new Promise((resolve, reject) => {
        Conexion.conexion.query("SELECT * FROM maquina", (err, result) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(result);
        });
    });
  }
  static async getMaquinas() {
    try {
        await Conexion.conectar();
        const maquinas = await this.getPromiseMaquinas();
        console.log('Maquinas:', maquinas);
        Conexion.conexion.end();
    } catch (error) {
        console.error('Error:', error);
    }
  }

  static getPromiseNuevaMaquina(maquina) {
    return new Promise((resolve, reject) => {
      Conexion.conexion.query("insert into maquina (modelo, num_serie, nombre_usuario, wallet, pool, idgranja) values (?, ?, ?, ?, ?, ?)", [
        maquina.modelo, maquina.num_serie, maquina.nombre_usuario, maquina.wallet, maquina.pool, maquina.idgranja
      ], (err, result) => {
          if (err) {
              reject(err);
              return;
          }
          resolve(result);
      });
    });
  }

  static async nuevaMaquina(maquina) {
    try {
      await Conexion.conectar();
      const resultadoConsulta = await this.getPromiseNuevaMaquina(maquina);
      console.log(resultadoConsulta);
      Conexion.conexion.end();
    } catch (error) {
      console.error("Error:" , error);
    }
  }

  static getPromiseBorrarMaquina(idMaquina) {
    return new Promise((resolve, reject) => {
      Conexion.conexion.query("delete from maquina where idmaquina = ?;", [idMaquina], (error, resultado) => {
        if (error) {
          reject(error);
        } else {
          resolve(resultado);
        }
      });
    });
  }

  static async borrarMaquina(idMaquina) {
    try {
      await Conexion.conectar();
      const resultadoConsulta = await this.getPromiseBorrarMaquina(idMaquina);
      console.log(resultadoConsulta);
      Conexion.conectar.end();
    } catch (error) {
      console.error.log("Error:" . error);
    }
  }

  static getPromiseModificarMaquina(maquina) {
    return new Promise((resolve, reject) => {
      Conexion.conexion.query(
        "update maquina set modelo = ?, num_serie = ?, nombre_usuario = ?, wallet = ?, pool = ?, idgranja = ? where idmaquina = ?;", [
          maquina.modelo, maquina.num_serie, maquina.nombre_usuario, maquina.wallet, maquina.pool, maquina.idgranja, maquina.idmaquina
        ], (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        });
    });
  }

  static async modificarMaquina(maquina) {
    await Conexion.conectar();
    const resultado = await this.getPromiseModificarMaquina(maquina);
    Conexion.conexion.end();
  }

  getMaquinaPorNumSerie(numSerie) {

  }

  getMaquinaPorUsuario(nombreUsuario) {

  }

  static getPromiseMaquinasPorGranja(idGranja) {
    return new Promise((resolve, reject) => {
      Conexion.conexion.query("select * from maquina where idgranja = ?", [idGranja],
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      });
    });
  }

  static async getMaquinasPorGranja(idGranja) {
    try {
      await Conexion.conectar();
      const maquinas = await this.getPromiseMaquinasPorGranja(idGranja);
      let maquinasVO = [];
      for (let i = 0; i < maquinas.length; i++) {
        let maquina = maquinas[i];
        maquinasVO.push(new MaquinaVO(maquina.idmaquina, maquina.idgranja, maquina.modelo,
          maquina.num_serie, maquina.nombre_usuario, maquina.wallet, maquina.pool));
      }
      //console.log(maquinasVO);
      Conexion.conexion.end();
      return maquinasVO;
    } catch (error) {
      console.log("Error: " . error);
    }
  }
}
module.exports = MaquinaDAO;

//let maquinaEjemplo = new MaquinaVO(12, 1, "nuevo modelo", "numero de serie", "usuario", "wallet", "pool");
//MaquinaDAO.nuevaMaquina(maquinaEjemplo);
//MaquinaDAO.modificarMaquina(maquinaEjemplo);
//MaquinaDAO.borrarMaquina(13);