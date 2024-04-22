/*
6- Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
5
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.

*/

class Libro {
  constructor() {
    this.ISBN = this.obtenerISBN();
    this.titulo = this.obtenerTitulo();
    this.autor = this.obtenerAutor();
    this.numPaginas = this.obtenerNumPaginas();
  }

  mostrarLibro() {
    console.log(
      `El libro ${this.titulo} con ISBN ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`
    );
  }

  obtenerISBN() {
    let ISBN = "";
    for (let i = 0; i < 13; i++) {
      ISBN += Math.floor(Math.random() * 10);
    }
    return ISBN;
  }

  obtenerTitulo() {
    return prompt("Ingrese el título del libro:");
  }

  obtenerAutor() {
    return prompt("Ingrese el autor del libro:");
  }

  obtenerNumPaginas() {
    let numPaginas;
    do {
      numPaginas = parseInt(prompt("Ingrese el número de páginas del libro:"));
    } while (!this.validarNumPaginas(numPaginas));
    return numPaginas;
  }

  validarNumPaginas(numPaginas) {
    if (isNaN(numPaginas) || numPaginas <= 0) {
      console.log("El número de páginas debe ser un número entero positivo.");
      return false;
    }
    return true;
  }
}

const libro1 = new Libro();
const libro2 = new Libro();

console.log("Libro 1:");
libro1.mostrarLibro();

console.log("Libro 2:");
libro2.mostrarLibro();

if (libro1.numPaginas > libro2.numPaginas) {
  console.log("\nEl Libro 1 tiene más páginas que el Libro 2.");
} else if (libro1.numPaginas < libro2.numPaginas) {
  console.log("\nEl Libro 2 tiene más páginas que el Libro 1.");
} else {
  console.log("\nAmbos libros tienen la misma cantidad de páginas.");
}
