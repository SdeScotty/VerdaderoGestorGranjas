class MaquinaVO {
    constructor(idmaquina, idgranja, modelo, num_serie, nombre_usuario, wallet, pool) {
        this.idmaquina = idmaquina;
        this.idgranja = idgranja;
        this.modelo = modelo;
        this.num_serie = num_serie;
        this.nombre_usuario = nombre_usuario;
        this.wallet = wallet;
        this.pool = pool;
    }
}

module.exports = MaquinaVO;