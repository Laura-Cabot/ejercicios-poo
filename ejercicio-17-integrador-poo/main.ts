import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Curso {
  private nombreCurso: string;
  private profesor: Profesor;
  private estudiantes: Estudiante[];

  constructor(nombreCurso: string, profesor: Profesor) {
    this.nombreCurso = nombreCurso;
    this.profesor = profesor;
    this.estudiantes = [];
  }

  public inscribirEstudiante(estudiante: Estudiante): void {
    this.estudiantes.push(estudiante);
  }

  public mostrarCurso(): void {
    console.log(`📚 Curso: ${this.nombreCurso}`);
    this.profesor.saludar();
    this.profesor.mostrarPreparacion();
    console.log("👥 Lista de estudiantes:");
    this.estudiantes.forEach(e => e.saludar());
  }
}