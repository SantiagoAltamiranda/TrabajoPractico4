/*
1- Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
Output:
objeto.encender();
objeto.apagar()
auto encendido
El auto se apagó
*/

function Auto(color, marca, modelo) {
    this.color = prompt("Ingrese el color del auto:");
    this.marca = prompt("Ingrese la marca del auto:");
    this.modelo = prompt("Ingrese el modelo");
    this.encendido = Math.random() < 0.5;
  
    this.encender = function () {
      if (!this.encendido) {
        this.encendido = true;
        console.log("Auto encendido");
      } else {
        console.log("El auto ya esta encendido");
      }
    };
  
    this.apagar = function () {
      if (this.encendido) {
        this.encendido = false;
        console.log("El auto se apago");
      } else {
        console.log("El auto ya esta apagado");
      }
    };
  }
  
  let miAuto = new Auto();
  console.log("Color del auto:", miAuto.color);
  console.log("Marca del auto:", miAuto.marca);
  console.log("Modelo del auto:", miAuto.modelo);
  if (miAuto.encendido) {
    console.log("Estado del auto: Encendido");
  } else {
    console.log("Estado del auto: apagado");
  }