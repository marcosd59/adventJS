/*
Reto #4: Dale la vuelta a los parentesis.

En el taller de Santa 🎅, algunos mensajes navideños han sido escritos de manera peculiar: las letras dentro de los paréntesis deben ser leídas al revés
Santa necesita que estos mensajes estén correctamente formateados. Tu tarea es escribir una función que tome una cadena de texto y revierta los caracteres dentro de cada par de paréntesis, eliminando los paréntesis en el mensaje final.
Eso sí, ten en cuenta que pueden existir paréntesis anidados, por lo que debes invertir los caracteres en el orden correcto.
*/

function decode(message) {
  function reverseSubstring(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  const stack = [];
  const chars = message.split("");

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === "(") {
      stack.push(i);
    } else if (chars[i] === ")") {
      const start = stack.pop();
      const end = i;
      reverseSubstring(chars, start + 1, end - 1);
    }
  }

  const result = chars.filter((char) => char !== "(" && char !== ")").join("");
  return result;
}

const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
