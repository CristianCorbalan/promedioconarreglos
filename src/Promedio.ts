//primero creo las funciones para que mi código quede legible
//creo la funcion de cargar alumnos por prompt
function cargarAlumnos(alumnosParametro: string[]): void {
  for (let indice: number = 0; indice < alumnosParametro.length; indice++) {
    alumnosParametro[indice] = prompt("Ingrese nombre de alumno");
    console.log("El alumno/a:", alumnosParametro[indice]);
  }
}
//creo la función para cargar las notas de los tres trimestres
function cargarNotas(notasParametro: number[]): void {
  for (let indice: number = 0; indice < notasParametro.length; indice++) {
    notasParametro[indice] = Number(prompt("Ingrese nota"));
    console.log(
      "con las siguientes notas:",
      "Nota1:",
      notasParametro[indice],
      "Nota2:",
      notasParametro[indice],
      "Nota3:",
      notasParametro[indice]
    );
  }
}
//otra función para sacar el promedio de las notas
function promedioNotas(
  nota1: number[],
  nota2: number[],
  nota3: number[],
  resultado: number[]
): void {
  for (let indice: number = 0; indice < nota1.length; indice++) {
    resultado[indice] = (nota1[indice] + nota2[indice] + nota3[indice]) / 3;
  }
}
//última función para mostrar el resultado del promedio
function mostrarPromedio(resultadoParametro: number[]): void {
  for (let indice = 0; indice < resultadoParametro.length; indice++) {
    console.log("tiene un promedio de:", resultadoParametro[indice]);
  }
}
//declaro las variables, la primer variable es para determinar la cantidad de posiciones del arreglo
let cantidadDeAlumnos: number = Number(prompt("Ingrese cantidad de alumnos"));
let datosAlumnos: string[] = new Array(cantidadDeAlumnos);
let nota1: number[] = new Array(cantidadDeAlumnos);
let nota2: number[] = new Array(cantidadDeAlumnos);
let nota3: number[] = new Array(cantidadDeAlumnos);
let resultado: number[] = new Array(cantidadDeAlumnos);

//llamo a las funciones realizadas previamente para ejecutar el programa
cargarAlumnos(datosAlumnos);
cargarNotas(nota1);
cargarNotas(nota2);
cargarNotas(nota3);
promedioNotas(nota1, nota2, nota3, resultado);
mostrarPromedio(resultado);
