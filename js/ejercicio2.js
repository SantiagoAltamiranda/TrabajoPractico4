/*
2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (ingreso) {
    if (!isNaN(ingreso) && ingreso > 0) {
      this.saldo += ingreso;
      alert(`Se han ingresado ${ingreso}.`);
    } else {
      alert("Ingrese una cantidad válida.");
    }
  },

  extraer: function (extraccion) {
    if (!isNaN(extraccion) && extraccion > 0) {
      if (extraccion <= this.saldo) {
        this.saldo -= extraccion;
        alert(`Se han extraído ${extraccion}.`);
      } else {
        alert("Fondos insuficientes.");
      }
    } else {
      alert("Ingrese una cantidad válida.");
    }
  },

  informar: function () {
    alert(`Titular de la cuenta: ${this.titular}`);
    alert(`Saldo actual: ${this.saldo}`);
  },
};

const ingreso = parseFloat(prompt("Ingrese la cantidad a depositar:"));
const extraccion = parseFloat(prompt("Ingrese la cantidad a retirar:"));
cuenta.ingresar(ingreso);
cuenta.extraer(extraccion);
cuenta.informar();
