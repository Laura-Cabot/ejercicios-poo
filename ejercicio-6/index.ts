//Implementar una clase que simule el comportamiento de una calculadora, con dos numeros y las operaciones de suma, resta, multiplicación y división.
//Todas las operaciones deben retornar un resultado, que luego va a ser mostrado por un metodo aparte.
//A su vez, en las operaciones de multiplicacion y division se debe validar que los numeros no sean cero. 
//Probar la calculadora con diferentes valores.

class calculadora {
    private num1: number;
    private num2: number;

    constructor(num1: number, num2: number) {
        this.num1 = num1;
        this.num2 = num2;
    }

    suma(): number {
        return this.num1 + this.num2;
    }

    resta(): number {
        return this.num1 - this.num2;
    }

    multiplicacion(): number | string {
        if (this.num1 === 0 || this.num2 === 0) {
            return "Error: No se puede multiplicar por cero.";
        }
        return this.num1 * this.num2;
    }

    
    division(): number | string {
            if (this.num1 === 0 || this.num2 === 0) {
                return "Error: No se puede dividir por cero.";
            }
            return this.num1 / this.num2;
        }
    
        mostrarResultado(operacion: string): void {
            let resultado: number | string;
            switch (operacion) {
                case "suma":
                    resultado = this.suma();
                    break;
                case "resta":
                    resultado = this.resta();
                    break;
                case "multiplicacion":
                    resultado = this.multiplicacion();
                    break;
                case "division":
                    resultado = this.division();
                    break;
                default:
                    resultado = "Operación no válida.";
            }
            console.log(`El resultado de la ${operacion} es: ${resultado}`);
        }
    }   
    const calc = new calculadora(10, 5);
    calc.mostrarResultado("suma"); // 15    
    calc.mostrarResultado("resta"); //  5
    calc.mostrarResultado("multiplicacion"); //  50
    calc.mostrarResultado("division"); //  2