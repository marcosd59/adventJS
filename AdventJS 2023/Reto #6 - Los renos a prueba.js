/*
Reto #6: 🦌 Los renos a prueba

Los elfos están catalogando los renos de Santa 🦌 según la distancia que pueden recorrer.

Para ello tienen una cadena de texto movements donde cada caracter representa la dirección del movimiento del reno:

> = Avanza a la derecha
< = Avanza a la izquierda
* = Puede avanzar o retroceder
Por ejemplo, si el movimiento es >>*<, va hacia la derecha dos veces, luego puede ir a derecha o izquierda (lo que maximice la distancia recorrida final) y luego ir a la izquierda.

Los elfos quieren saber cuál es la máxima distancia que recorre el reno al finalizar todos los movimientos.

En el ejemplo anterior, la máxima distancia que recorre el reno es 2. Va a la derecha dos veces +2, luego con el * puede ir a la derecha otra vez para maximizar la distancia +1 y luego va a la izquierda -1.

Crea una función maxDistance que reciba la cadena de texto movements y devuelva la máxima distancia que puede recorrer el reno en cualquier dirección:

Ten en cuenta que no importa si es a la izquierda o la derecha, la distancia es el valor absoluto de la distancia recorrida máxima al finalizar los movimientos.
*/

function maxDistance(movements) {
  let total = 0;
  let derecha = 0;
  let izquierda = 0;
  let asterisco = 0;

  for (let i = 0; i < movements.length; i++) {
    if (movements[i] === ">") {
      derecha++;
    } else if (movements[i] === "<") {
      izquierda++;
    } else if (movements[i] === "*") {
      asterisco++;
    }
  }

  if (derecha >= izquierda) {
    derecha = derecha + asterisco;
  } else {
    izquierda = izquierda + asterisco;
  }
  total = derecha - izquierda;

  if (total < 0) {
    total = total * -1;
  }

  return total;
}

const movements = ">>*<";
const result = maxDistance(movements);
console.log(result); // -> 2

const movements2 = "<<<>";
const result2 = maxDistance(movements2);
console.log(result2); // -> 2

const movements3 = ">***>";
const result3 = maxDistance(movements3);
console.log(result3); // -> 5

const movements4 = "<<<<>>>><<<***><";
const result4 = maxDistance(movements4);
console.log(result4); // -> 6