/*
Reto #1: !Primer regalo repetido!

En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.
Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.
¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!
En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si no hay números repetidos, devuelve -1.
*/

function findFirstRepeated(gifts) {
  const idMap = new Map();

  for (let i = 0; i < gifts.length; i++) {
    const id = gifts[i];

    if (idMap.has(id)) {
      return id;
    }

    idMap.set(id, i);
  }

  return -1;
}

const giftIds = [2, 1, 3, 5, 3, 2];
const firstRepeatedId = findFirstRepeated(giftIds);
console.log(firstRepeatedId);

const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log(firstRepeatedId2);

const giftIds3 = [5, 1, 5, 1];
const firstRepeatedId3 = findFirstRepeated(giftIds3);
console.log(firstRepeatedId3);
