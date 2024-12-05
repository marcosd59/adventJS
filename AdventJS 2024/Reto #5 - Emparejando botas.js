/*
Reto #5: 👞 Emparejando botas

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que puedes tener más de una zapatilla emparejada del mismo tamaño!

* @param {{ type: 'I' | 'R', size: number }[]} shoes
* @returns {number[]} Available shoes

*/

function organizeShoes(shoes) {
  const leftShoes = shoes.filter((shoe) => shoe.type === "I");
  const rightShoes = shoes.filter((shoe) => shoe.type === "R");
  const availableShoes = [];

  for (let i = 0; i < leftShoes.length; i++) {
    for (let j = 0; j < rightShoes.length; j++) {
      if (leftShoes[i].size === rightShoes[j].size) {
        availableShoes.push(leftShoes[i].size);
        rightShoes.splice(j, 1);
        break;
      }
    }
  }
  return availableShoes;
}

const shoes = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 42 },
];

organizeShoes(shoes);
// [38, 42]

const shoes2 = [
  { type: "I", size: 38 },
  { type: "R", size: 38 },
  { type: "I", size: 38 },
  { type: "I", size: 38 },
  { type: "R", size: 38 },
];
// [38, 38]

const shoes3 = [
  { type: "I", size: 38 },
  { type: "R", size: 36 },
  { type: "R", size: 42 },
  { type: "I", size: 41 },
  { type: "I", size: 43 },
];

organizeShoes(shoes3);
// []
