# 📚 Proyecto: Ejercicios de Programación Orientada a Objetos en TypeScript

Este repositorio contiene una colección de **18 ejercicios** prácticos desarrollados en TypeScript, aplicando los principales conceptos de la **Programación Orientada a Objetos (POO)**.

Los ejercicios están organizados en carpetas numeradas (`ejercicio-1` hasta `ejercicio-18`) y cada uno aborda distintos aspectos del paradigma orientado a objetos y de la práctica con TypeScript.

---

## ✨ Temas abordados en los ejercicios

- ✅ Clases, atributos y métodos
- ✅ Encapsulamiento (`private`, `protected`, `public`)
- ✅ Herencia y superclases
- ✅ Polimorfismo (métodos redefinidos)
- ✅ Composición (una clase contiene otras)
- ✅ Métodos privados
- ✅ Abstracción y modelado del mundo real
- ✅ Proyecto integrador con múltiples clases y relaciones

---

## 📁 Estructura del repositorio

```
ejercicios-poo/
├── ejercicio-1-auto/
├── ejercicio-2-persona/
├── ejercicio-3-televisor/
├── ejercicio-4-rectangulo/
├── ejercicio-5-libro/
├── ejercicio-6-calculadora/
├── ejercicio-7-dado/
├── ejercicio-8-cuenta bancaria/
├── ejercicio-9-decodificador/
├── ejercicio-10-registro automotor/
├── ejercicio-11-sistema educativo/
├── ejercicio-12-cubilete/
├── ejercicio-13-gestor de libros/
├── ejercicio-14-generala/
├── ejercicio-15-animal/
├── ejercicio-16-auto-carreras/
├── ejercicio-18-integrador-poo/
└── README.md
```

Cada carpeta contiene:
- Código fuente (`.ts`)
- Archivos de configuración si es necesario (`package.json`, `tsconfig.json`)

---

## 🧩 Proyecto Integrador (Ejercicio 17)

Este ejercicio final reúne todos los conceptos anteriores y simula un sistema educativo.

### 📘 Clases principales:
- `Persona` (superclase)
- `Estudiante` y `Profesor` (heredan de `Persona`)
- `Curso` (contiene profesor y lista de estudiantes)

### 🔍 Características:
- Herencia, polimorfismo, métodos privados, atributos protegidos
- Diagrama de clases incluido

### 🖼️ Diagrama:
![Diagrama de clases](./ejercicio-17-integrador-poo/diagrama-clases-integrador.png)

---

## ▶️ Cómo ejecutar cualquier ejercicio

1. Entrá a la carpeta del ejercicio (por ejemplo, `cd ejercicio-5-libro`)
2. Ejecutá con:

```bash
npx ts-node archivo.ts
```

> Asegurate de tener instalados `ts-node` y `typescript`:
> ```bash
> npm install -g ts-node typescript
> ```

---

## 👩‍💻 Autor

**Laura Cabot** – Curso de Programación en CFS – Ejercicios de Práctica Orientada a Objetos

