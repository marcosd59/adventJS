/*
Reto #7: 📦 Las cajas en 3D

Santa está experimentando con nuevos diseños de regalos y necesita tu ayuda para visualizarlos en 3D.

Tu tarea es escribir una función que, dado un tamaño n (entero), genere un dibujo de un regalo en 3D utilizando caracteres ASCII.

Las líneas de los regalos se dibujan con # y las caras con el símbolo que nos pasan como parámetro:

Importante: Nos han dicho que siempre hay que dejar un salto de línea al final del dibujo.

Nota: Ten en cuenta que, en los tests, la primera línea se ve empujada por el caracter ".
*/

function drawGift(size, symbol) {
  let bgSize = size - 2;

  bgSize += +!(bgSize + 1);

  let response = "";

  let topCenter = "";
  let bottomCenter = "";

  for (const a of [...Array.from({ length: bgSize }).keys()]) {
    const c = "#" + symbol.repeat(bgSize) + "#" + symbol.repeat(a) + "#";
    bottomCenter = c + "\n" + bottomCenter;
    topCenter += " ".repeat(bgSize - a) + c + "\n";
  }

  response =
    " ".repeat(size - 1) +
    "#".repeat(size) +
    "\n" +
    (
      topCenter +
      "#".repeat(size) +
      symbol.repeat(bgSize) +
      "#" +
      "\n" +
      bottomCenter +
      "#".repeat(size) +
      "\n"
    ).repeat(+!!(size - 1));

  return response;
}

module.exports = drawGift;

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