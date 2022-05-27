//Sumar los elementos de cada una de las posiciones de dos arreglos y guardar el resultado en otro arreglo
//El arreglo tiene dimensión 6 y los números de los dos vectores los carga el usuario

let vector1: number [] = new Array(6);
let vector2: number [] = new Array(6);
let sumaDeVectores: number [] = new Array(6);

for (let indice = 0; indice <6; indice++) {
  vector1[indice]= Number(prompt("Ingresar valores para vector 1"));
}

for (let indice = 0; indice <6; indice++){
  vector2[indice]= Number(prompt("Igrese valores para vector 2"));
}

for (let indice = 0; indice <6; indice++){
  sumaDeVectores[indice]= vector1[indice] + vector2[indice];
  console.log ("El resultado de la suma es:",sumaDeVectores[indice]);
}