import { Persona } from "./Persona";

export class Estudiante extends Persona {
  private curso: string;

  constructor(nombre: string, dni: string, email: string, curso: string) {
    super(nombre, dni, email);
    this.curso = curso;
  }

  public saludar(): void {
    console.log(`Hola, soy ${this.nombre}, estudiante del curso ${this.curso}`);
  }
}