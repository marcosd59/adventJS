/*
Reto #10: 🎄 Crea tu propio árbol de navidad

¡Vaya idea ha tenido Sam Elfman! Quiere ofrecer un servicio que te crea un árbol de Navidad 🎄 personalizado en cuestión de segundos.

Para crearlo nos pasan una cadena de caracteres para formar el árbol y un número que indica la altura del mismo.

Cada carácter de la cadena representa un adorno del árbol, y vamos utilizándolos de forma cíclica hasta llegar a la altura indicada. Como mínimo siempre nos pasarán uno.

Debemos devolver un string multilínea con el árbol de Navidad formado con los adornos, la altura indicada más una última línea con el tronco formado por el carácter | en el centro y, finalmente, un salto de línea \n.
*/

function createChristmasTree(ornaments, height) {
  let tree = "";
  let max_width = 2 * height - 1;
  let ornamentIndex = 0;

  for (let i = 1; i <= height; i++) {
    let current_width = 2 * i - 1;
    let spaces = (max_width - current_width) / 2;
    let line = "";

    for (let j = 0; j < current_width; j++) {
      if (j % 2 === 0) {
        line += ornaments[ornamentIndex % ornaments.length];
        ornamentIndex++;
      } else {
        line += " ";
      }
    }

    tree += " ".repeat(spaces) + line + "\n";
  }

  tree += " ".repeat((max_width - 1) / 2) + "|" + "\n";
  return tree;
}


console.log(createChristmasTree("123", 4));

/*
Por ejemplo si recibimos la cadena "123" y el número 4 como altura, tendríamos que construir este árbol:

   1
  2 3
 1 2 3
1 2 3 1
   |

Si recibimos la cadena *@o y el número 3, el árbol que debemos devolver es:

  *
 @ o
* @ o
  |

Nota:

El árbol siempre debe estar centrado, para ello añade espacios en blanco a la izquierda de cada línea.
Crea espacios sólo a la izquierda de cada línea del árbol. No dejes espacios en blanco a la derecha.
Los adornos tienen un espacio en blanco entre ellos de separación.
Si te fallan los tests y visualmente parece que el árbol está bien, comprueba que no haya espacios en blanco que sobren, especialmente a la derecha de cada línea.
*/
