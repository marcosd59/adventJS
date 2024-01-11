/*
Reto #2: Ponemos en marcha la fabrica.

En el taller de Santa, los elfos tienen una lista de regalos que desean fabricar y un conjunto limitado de materiales.
Los regalos son cadenas de texto y los materiales son caracteres. Tu tarea es escribir una función que, dada una lista de regalos y los materiales disponibles, devuelva una lista de los regalos que se pueden fabricar.
Un regalo se puede fabricar si contamos con todos los materiales necesarios para fabricarlo.
*/

function manufacture(gifts, materials) {
  const result = [];

  for (const gift of gifts) {
    if (canManufacture(gift, materials)) {
      result.push(gift);
    }
  }

  function canManufacture(gift, materials) {
    const giftChars = new Set(gift);
    const availableMaterials = new Set(materials);

    for (const char of giftChars) {
      if (!availableMaterials.has(char)) {
        return false;
      }
    }

    return true;
  }

  return result;
}

const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

console.log(manufacture(gifts, materials));
