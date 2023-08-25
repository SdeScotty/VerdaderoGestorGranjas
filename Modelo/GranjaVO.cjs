class GranjaVO {
    constructor(idgranja, localizacion, propietario, nombre, maquinas = []) {
        this.idgranja = idgranja;
        this.localizacion = localizacion;
        this.propietario = propietario;
        this.nombre = nombre;
        this.maquinas = maquinas;
    }
    
    addMaquina(maquina) {
        maquinas.push(maquina);
    }
}

module.exports = GranjaVO;