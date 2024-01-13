/*
Reto #7: 📦 Las cajas en 3D

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.
Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.
Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".

*/

function drawGift(size, symbol) {
  let gift = "";

  // Build the top layer
  gift += " ".repeat(size - 1) + "#".repeat(4) + "\n";

  // Build the middle layers
  for (let i = 1; i < size; i++) {
    gift +=
      " ".repeat(size - i - 1) +
      "#" +
      symbol.repeat(i) +
      "#" +
      symbol.repeat(size - i - 1) +
      "#" +
      "\n";
  }

  // Build the bottom layers
  gift += "#".repeat(size) + symbol.repeat(size) + "#" + "\n";
  for (let i = size - 1; i > 0; i--) {
    gift += symbol.repeat(i) + "#" + symbol.repeat(size - i) + "#" + "\n";
  }
  gift += "#".repeat(size + 2) + "\n";

  return gift;
}

console.log(drawGift(4, "+"));

/*
   ####
  #++##
 #++#+#
####++#
#++#+#
#++##
####
*/

console.log(drawGift(5, "*"));

/*
    #####
   #***##
  #***#*#
 #***#**#
#####***#
#***#**#
#***#*#
#***##
#####
*/

console.log(drawGift(1, "^"));

/*
#
*/
