/*
3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área.
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  modificar(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  mostrar() {
    console.log(`Rectangulo: Alto = ${this.alto}, Ancho = ${this.ancho}`);
  }

  calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }

  calcularArea() {
    return this.alto * this.ancho;
  }
}
let alto = parseInt(prompt("Ingrese la altura del rectangulo: "));
let ancho = parseInt(prompt("Ingrese el ancho del rectangulo: "));
let miRectangulo = new Rectangulo(alto, ancho);
miRectangulo.mostrar();
console.log("Perimetro:", miRectangulo.calcularPerimetro());
console.log("Area:", miRectangulo.calcularArea());

//Modifico el rectangulo

let nuevoAlto = parseFloat(prompt("Ingrese la nueva altura del rectangulo: "));
let nuevoAncho = parseFloat(prompt("Ingrese el nuevo ancho del rectangulo: "));
miRectangulo.modificar(nuevoAlto, nuevoAncho);
miRectangulo.mostrar();
console.log("Perimetro: ", miRectangulo.calcularPerimetro());
console.log("Area: ", miRectangulo.calcularArea());
