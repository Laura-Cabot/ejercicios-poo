//Aplicar lo visto para modelar un sistema educativo donde:
//Los profesores deben tener un listado de alumnos.
//Cada alumno debe saber  su nota e informar si sesta aprobado o no. Si la nota es mayar que 7.
//La escuela debe tener un registro de alumnos y profesores. Y debe poder matricular/contratar y explusar/despedir a los mismos.
class Alumno { 
    private nombre: string;
    private nota: number;

    constructor(nombre: string, nota: number) {
        this.nombre = nombre;
        this.nota = nota;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getNota(): number {
        return this.nota;
    }

    public estaAprobado(): boolean {
        return this.nota >= 7;
    }
}

class Profesor {
    private nombre: string;
    private alumnos: Alumno[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public agregarAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public getAlumnos(): Alumno[] {
        return this.alumnos;
    }
}

class Escuela {
    private alumnos: Alumno[] = [];
    private profesores: Profesor[] = [];

    public matricularAlumno(alumno: Alumno): void {
        this.alumnos.push(alumno);
    }

    public contratarProfesor(profesor: Profesor): void {
        this.profesores.push(profesor);
    }

    public expulsarAlumno(alumno: Alumno): void {
        this.alumnos = this.alumnos.filter(a => a !== alumno);
    }

    public despedirProfesor(profesor: Profesor): void {
        this.profesores = this.profesores.filter(p => p !== profesor);
    }
}

// Ejemplo de uso
const escuela = new Escuela();

const profesor1 = new Profesor("Juan");
const profesor2 = new Profesor("Maria");
const contratarProfesor = new Profesor("Lucia");
const despedirProfesor = new Profesor("Carlos");

const alumno1 = new Alumno("Pedro", 8);
const alumno2 = new Alumno("Ana", 6);
const alumno3 = new Alumno("Luis", 9);
const alumno4 = new Alumno("Sofia", 5);
const matricularAlumno = new Alumno("Valeria", 10);
const expulsarAlumno = new Alumno("Javier", 4);

// Contrataciones y matriculaciones
escuela.contratarProfesor(profesor1);
escuela.contratarProfesor(profesor2);
escuela.contratarProfesor(contratarProfesor);
escuela.despedirProfesor(despedirProfesor);

escuela.matricularAlumno(alumno1);
escuela.matricularAlumno(alumno2);
escuela.matricularAlumno(alumno3);
escuela.matricularAlumno(alumno4);
escuela.matricularAlumno(matricularAlumno);
escuela.expulsarAlumno(expulsarAlumno);

// Asignar alumnos a profesores
profesor1.agregarAlumno(alumno1);
profesor1.agregarAlumno(alumno2);
profesor2.agregarAlumno(alumno3);
profesor2.agregarAlumno(alumno4);
profesor2.agregarAlumno(matricularAlumno);

// Mostrar información
console.log("=== Profesores y sus alumnos ===");
[profesor1, profesor2, contratarProfesor].forEach(prof => {
    console.log(`Profesor: ${prof.getNombre()}`);
    const alumnos = prof.getAlumnos();
    if (alumnos.length === 0) {
        console.log("  (Sin alumnos asignados)");
    } else {
        alumnos.forEach(alumno => {
            console.log(`  Alumno: ${alumno.getNombre()}, Nota: ${alumno.getNota()}, Aprobado: ${alumno.estaAprobado() ? "Sí" : "No"}`);
        });
    }
});



