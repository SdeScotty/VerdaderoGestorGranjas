"use strict"
const Conexion = require('./Conexion.cjs');
const GranjaVO = require('./GranjaVO.cjs');
const MaquinaDAO = require('./MaquinaDAO.cjs');

class GranjaDAO {
    static getPromiseGranjaPorNombre(nombre) {
        return new Promise((resolve, reject) => {
            Conexion.conexion.query("SELECT * from granja where nombre=?", [nombre],
            (err, results) => {
                if (err) {
                    reject(err);
                    return;
                } else {
                    resolve(results[0]);
                }
            });

        });
    }

    static async getGranjaPorNombre(nombre) {
        try {
            await Conexion.conectar();
            const granja = await this.getPromiseGranjaPorNombre(nombre);
            let granjaVO = new GranjaVO(granja.idgranja, granja.localizacion, granja.propietario, granja.nombre);
           // let maquinas = 
            Conexion.conexion.end();
            console.log('Granja:', granjaVO);
            return granjaVO;

        } catch (error) {
            console.log("Error: ", error);
        }
    }
}

exports.module = GranjaDAO;
GranjaDAO.getGranjaPorNombre("Bitfarm");