/*
Reto #2: 🖼️ Enmarcando nombres

Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más laro más un margen de 1 espacio a cada lado.
*/

function createFrame(names) {
  const longestName = names.reduce(
    (acc, name) => (name.length > acc ? name.length : acc),
    0
  );
  const frameWidth = longestName + 4;
  const allNames = names.map((name) => name.padEnd(longestName, " "));

  let frame = "*".repeat(frameWidth);

  for (let name of allNames) {
    frame += `\n* ${name} *`;
  }

  frame += "\n" + "*".repeat(frameWidth);

  return frame || "*";
}

createFrame(["midu", "madeval", "educalvolpz"]);

/* Resultado esperado:
 ***************
 * midu        *
 * madeval     *
 * educalvolpz *
 ***************/

createFrame(["midu"]);

/* Resultado esperado:
 ********
 * midu *
 ********/

createFrame(["a", "bb", "ccc"]);

/* Resultado esperado:
 *******
 * a   *
 * bb  *
 * ccc *
 *******/

createFrame(["a", "bb", "ccc", "dddd"]);
