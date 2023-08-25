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

    addMaquinas(maquinas) {
        this.maquinas.concat(maquinas)
    }
    
    setMaquinas(maquinas) {
        this.maquinas = maquinas;
    }
}

module.exports = GranjaVO;