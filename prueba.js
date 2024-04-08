class Edificio{
    constructor(calle,numero,codigo_postal){
        this.calle = calle;
        this.numero = numero;
        this.codigo_postal = codigo_postal
        this.plantas = [];
    }
    inicio(){
         // Mensaje de construcción del edificio
         console.log(`Construido nuevo edificio en calle: ${this.calle}, nº: ${this.numero}, CP: ${this.codigo_postal}`);
    }

    agregarPlantasYPuertas(numPlantas,numPuertas){
        for (let i = 0; i < numPlantas; i++) {
            let planta = [];
            for (let j = 0; j < numPuertas; j++) {
                planta.push({ propietario: "" });
            }
            this.plantas.push(planta);
        }
    }
    
    // Método para modificar el número del edificio
    modificarNumero(numero) {
        this.numero = numero;
    };

    // Método para modificar la calle del edificio
    modificarCalle(calle){
        this.calle = calle;
    };

    // Método para modificar el código postal del edificio
    modificarCodigoPostal(codigo){
        this.codigoPostal = codigo;
    };

    // Método para imprimir la calle del edificio
    imprimeCalle (){
        return this.calle;
    };

    // Método para imprimir el número del edificio
    imprimeNumero (){
        return this.numero;
    };

    // Método para imprimir el código postal del edificio
    imprimeCodigoPostal (){
        return this.codigoPostal;
    }

    // Método para agregar propietarios a las puertas del edificio
    agregarPropietario(nombre, planta, puerta) {
        this.plantas[planta - 1][puerta - 1].propietario = nombre;
    }

    // Método para imprimir los propietarios de cada puerta del edificio
    imprimePlantas(){
        let resultado = "";
        for (let i = 0; i < this.plantas.length; i++) {
            for (let j = 0; j < this.plantas[i].length; j++) {
                if (this.plantas[i][j].propietario !== "") {
                    resultado += `Propietario del puerta ${j + 1} de la planta ${i}: ${this.plantas[i][j].propietario}.\n`;
                }
            }
        }
        return resultado;
    }

    
}


// Instanciamos 3 edificios
let edificioA = new Edificio("Garcia Prieto", 58, "15706");


// Ejemplo de uso
edificioA.inicio()


edificioA.agregarPlantasYPuertas(2, 3);
edificioA.agregarPropietario("Jose Antonio Lopez", 1, 1);
edificioA.agregarPropietario("Luisa Martinez", 1, 2);
edificioA.agregarPropietario("Marta Castellón", 1, 3);
edificioA.agregarPropietario("Antonio Pereira", 2, 2);

console.log(edificioA.imprimePlantas());
edificioA.agregarPlantasYPuertas(1, 3);