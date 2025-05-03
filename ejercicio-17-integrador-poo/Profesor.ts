import { Persona } from "./Persona";

export class Profesor extends Persona {
  private materia: string;

  constructor(nombre: string, dni: string, email: string, materia: string) {
    super(nombre, dni, email);
    this.materia = materia;
  }

  private prepararClase(): string {
    return `📘️ Preparando clase de ${this.materia}...`;
  }

  public mostrarPreparacion(): void {
    console.log(this.prepararClase());
  }

  public saludar(): void {
    console.log(`Buen día, soy el profesor ${this.nombre} de ${this.materia}`);
  }
}