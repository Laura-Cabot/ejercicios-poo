//Implementar una clase que represente una cuenta bancaria, con dos atributos: numero de cuenta y saldo actual. Implenta los siguientes métodos:
//Un constructor que me permita establecer el numero de cuenta y el saldo.
//Un metodo que incremente el saldo.
//Un metodo que disminuya el saldo si hay fondos suficientes, caso contrario no hacer nada.
//Un metodo que imprima el saldo actual.

class CuentaBancaria {
  private numeroCuenta: string;
  private saldoActual: number;

  constructor(numeroCuenta: string, saldoInicial: number) {
    this.numeroCuenta = numeroCuenta;
    this.saldoActual = saldoInicial;
  }

  public incrementarSaldo(monto: number): void {
    this.saldoActual += monto;
  }

  public disminuirSaldo(monto: number): void {
    if (this.saldoActual >= monto) {
      this.saldoActual -= monto;
    } else {
      console.log("Fondos insuficientes.");
    }
  }

  public imprimirSaldo(): void {
    console.log(`Saldo actual de la cuenta ${this.numeroCuenta}: $${this.saldoActual}`);
  }
}

// Ejemplo de uso
const cuenta = new CuentaBancaria("123456789", 1000);
cuenta.imprimirSaldo(); // Saldo actual de la cuenta 123456789: $1000
cuenta.incrementarSaldo(500);
cuenta.imprimirSaldo(); // Saldo actual de la cuenta 123456789: $1500
cuenta.disminuirSaldo(200);
cuenta.imprimirSaldo(); // Saldo actual de la cuenta 123456789: $1300
cuenta.disminuirSaldo(2000); // Fondos insuficientes.
cuenta.imprimirSaldo(); // Saldo actual de la cuenta 123456789: $1300