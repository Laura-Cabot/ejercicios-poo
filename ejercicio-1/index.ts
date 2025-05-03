//Ejercicio 1: Plantear una clase Auto de la forma en que se vio en la clase, especificando variables internas y metodos. Implementar en TypeScrip.

export class Auto {
    private marca: string;
    private modelo: string;
    private año: number;
    private color: string;
    public patente: string;

    constructor(marca: string, modelo: string, año: number, color: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
        this.patente = patente;
    }

    public mostrarDetalles(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Patente: ${this.patente}`);
    }
}

// Crear varios autos con sus patentes
const auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo", "ABC123");
const auto2 = new Auto("Honda", "Civic", 2021, "Azul", "DEF456");
const auto3 = new Auto("Ford", "Focus", 2019, "Amarillo", "GHI789");
const auto4 = new Auto("Chevrolet", "Cruze", 2022, "Verde", "JKL321");
const auto5 = new Auto("Nissan", "Sentra", 2023, "Blanco", "MNO654");
const auto6 = new Auto("Hyundai", "Elantra", 2024, "Negro", "PQR987");

// Mostrar detalles de todos
auto1.mostrarDetalles();
auto2.mostrarDetalles();
auto3.mostrarDetalles();
auto4.mostrarDetalles();
auto5.mostrarDetalles();
auto6.mostrarDetalles();