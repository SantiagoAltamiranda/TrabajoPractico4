/*
5- Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
    constructor(nombre, edad, sexo, peso, altura, añoNacimiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.añoNacimiento = añoNacimiento;
        this.DNI = this.generaDNI();
    }

    generaDNI() {
        return Math.floor(Math.random() * 100000000);
    }

    calcularGeneracion() {
        const generaciones = {
            "Generación Z": "Nativos digitales, hiperconectados desde pequeños.",
            "Millennials": "Crecieron con la tecnología pero la adoptaron en su juventud.",
            "Generación X": "Vivieron la transición de lo analógico a lo digital.",
            "Baby Boomers": "Años de crecimiento económico y social tras la Segunda Guerra Mundial.",
            "Silent Generation": "Nacidos durante la Gran Depresión y la Segunda Guerra Mundial."
        };

        let generacion;
        if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010){
            generacion = "Generación Z";
        } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
            generacion = "Millennials";
        } else if (this.añoNacimiento >= 1965 && this.añoNacimiento <= 1980) {
            generacion = "Generación X";
        } else if (this.añoNacimiento >= 1946 && this.añoNacimiento <= 1964) {
            generacion = "Baby Boomers";
        } else {
            generacion = "Silent Generation";
        }
        return { generacion, caracteristicas: generaciones[generacion] };
    }

    esMayorDeEdad() {
        return this.edad >= 18;
    }

    mostrarDatos() {
        console.log("Nombre:", this.nombre);
        console.log("Edad:", this.edad);
        console.log("Sexo:", this.sexo);
        console.log("Peso:", this.peso);
        console.log("Altura:", this.altura);
        console.log("Año de Nacimiento:", this.añoNacimiento);
        console.log("DNI:", this.DNI);
    }
}

function solicitarInformacionPersona() {
    let nombre = prompt("Ingrese el nombre:");
    let edad = parseInt(prompt("Ingrese la edad:"));
    while (isNaN(edad) || edad <= 0 || edad > 100) {
        edad = parseInt(prompt("Edad inválida. Ingrese la edad nuevamente:"));
    }
    let sexo = prompt("Ingrese el sexo (H, M):").toUpperCase();
    while (sexo !== 'H' && sexo !== 'M') {
        sexo = prompt("Sexo inválido. Ingrese el sexo nuevamente (H, M):").toUpperCase();
    }
    const peso = parseFloat(prompt("Ingrese el peso:"));
    const altura = parseFloat(prompt("Ingrese la altura:"));
    const añoNacimiento = parseInt(prompt("Ingrese el año de nacimiento:"));

    return new Persona(nombre, edad, sexo, peso, altura, añoNacimiento);
}

const persona1 = solicitarInformacionPersona();
const persona2 = solicitarInformacionPersona();

console.log("Generación:", persona1.calcularGeneracion().generacion);
console.log("Es mayor de edad:", persona1.esMayorDeEdad());
persona1.mostrarDatos();

console.log("Generación:", persona2.calcularGeneracion().generacion);
console.log("Es mayor de edad:", persona2.esMayorDeEdad());
persona2.mostrarDatos();
