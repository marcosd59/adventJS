/*
Reto #9: 🚦 Alterna las luces

Están encendiendo las luces de Navidad 🎄 en la ciudad y, como cada año, ¡hay que arreglarlas!

Las luces son de dos colores: 🔴 y 🟢 . Para que el efecto sea el adecuado, siempre deben estar alternadas. Es decir, si la primera luz es roja, la segunda debe ser verde, la tercera roja, la cuarta verde, etc.

Nos han pedido que escribamos una función adjustLights que, dado un array de strings con el color de cada luz (representados con los emojis 🔴 para el rojo y 🟢 para el verde), devuelva el número mínimo de luces que hay que cambiar para que estén los colores alternos.
*/

function adjustLights(lights) {
  let o1 = 0;
  let o2 = 0;
  let index = 0;
  for (const light of lights) {
    o1 += +(light !== "🟢") * +(index % 2 !== 0);
    o2 += +(light !== "🔴") * +(index % 2 !== 0);
    o1 += +(light !== "🔴") * +(index % 2 !== 1);
    o2 += +(light !== "🟢") * +(index % 2 !== 1);
    index++;
  }
  const x = o1 - o2;
  return (x + 2 * o2 - ((x + (x >> 31)) ^ (x >> 31))) / 2;
}

adjustLights(["🟢", "🔴", "🟢", "🟢", "🟢"]);
// -> 1 (cambias la cuarta luz a rojo)

adjustLights(["🔴", "🔴", "🟢", "🔴", "🟢"]);
// -> 1 (cambia la primera luz a verde)

adjustLights(["🔴", "🔴", "🟢", "🟢", "🔴"]);
// -> 2 (cambias la segunda luz a verde y la tercera a rojo)

adjustLights(["🟢", "🔴", "🟢", "🔴", "🟢"]);
// -> 0 (ya están alternadas)

adjustLights(["🔴", "🔴", "🔴"]);
// -> 1 (cambias la segunda luz a verde)
