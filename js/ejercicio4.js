/*
4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimirDatos() {
    console.log("Codigo:", this.codigo);
    console.log("Nombre:", this.nombre);
    console.log("Precio:", this.precio);
  }
}
function crearProducto() {
  const codigo = prompt("Ingrese codigo del producto:");
  const nombre = prompt("Ingrese nombre del producto:");
  const precio = parseFloat(prompt("Ingrese el precio del producto:"));
  return new Producto(codigo, nombre, precio);
}

const productos = [];
for (let i = 0; i < 3; i++) {
  const nuevoProducto = crearProducto();
  productos.push(nuevoProducto);
}
console.log("Datos de los productos");
productos.forEach((producto) => {
  producto.imprimirDatos();
  console.log("---------------");
});

console.log("Proceso terminado.");
