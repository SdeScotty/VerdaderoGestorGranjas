-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema granjas
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema granjas
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `granjas` DEFAULT CHARACTER SET utf8 ;
USE `granjas` ;

-- -----------------------------------------------------
-- Table `granjas`.`granja`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `granjas`.`granja` (
  `idgranja` INT NOT NULL,
  `localizacion` VARCHAR(45) NOT NULL,
  `propietario` VARCHAR(45) NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idgranja`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `granjas`.`maquina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `granjas`.`maquina` (
  `idmaquina` INT NOT NULL,
  `modelo` VARCHAR(45) NOT NULL,
  `num_serie` VARCHAR(45) NOT NULL,
  `nombre_usuario` VARCHAR(45) NOT NULL,
  `wallet` VARCHAR(45) NOT NULL,
  `pool` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idmaquina`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `granjas`.`granja_has_maquina`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `granjas`.`granja_has_maquina` (
  `id_granja` INT NOT NULL,
  `id_maquina` INT NOT NULL,
  PRIMARY KEY (`id_granja`, `id_maquina`),
  INDEX `id_maquina_idx` (`id_maquina` ASC) VISIBLE,
  CONSTRAINT `id_granja`
    FOREIGN KEY (`id_granja`)
    REFERENCES `granjas`.`granja` (`idgranja`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT,
  CONSTRAINT `id_maquina`
    FOREIGN KEY (`id_maquina`)
    REFERENCES `granjas`.`maquina` (`idmaquina`)
    ON DELETE RESTRICT
    ON UPDATE RESTRICT)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
