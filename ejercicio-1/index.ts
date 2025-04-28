//Plantear una clase Auto de la forma en que se vio en clase, especificando variables interans y metodos.

class Auto {
    private marca: string;
    private modelo: string;
    private año: number;
    private color: string;

    constructor(marca: string, modelo: string, año: number, color: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.color = color;
    }

    public mostrarDetalles(): void {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}`);
    }
}
const auto1 = new Auto("Toyota", "Corolla", 2020, "Rojo");
const auto2 = new Auto("Honda", "Civic", 2021, "Azul"); 
const auto3 = new Auto("Ford", "Focus", 2019,"amarillo");
const auto4 = new Auto("Chevrolet", "Cruze", 2022,"verde");
const auto5 = new Auto("Nissan", "Sentra", 2023,"blanco");
const auto6 = new Auto("Hyundai", " Elantra", 2024,"negro");


auto1.mostrarDetalles(); // Marca: Toyota, Modelo: Corolla, Año: 2020, Color: Rojo
auto2.mostrarDetalles(); // Marca: Honda, Modelo: Civic, Año: 2021, Color: Azul
auto3.mostrarDetalles(); // Marca: Ford, Modelo: Focus, Año: 2019, Color: amarillo
auto4.mostrarDetalles(); // Marca: Chevrolet, Modelo: Cruze, Año: 2022, Color: verde       
auto5.mostrarDetalles(); // Marca: Nissan, Modelo: Sentra, Año: 2023, Color: blanco
auto6.mostrarDetalles(); // Marca: Hyundai, Modelo: Elantra, Año