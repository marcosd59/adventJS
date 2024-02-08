/*
Reto #12: 📸 ¿Es una copia válida?

En el Polo Norte todavía usan fotocopiadoras de papel. Los elfos las usan para copiar las cartas que los niños envían a Santa y así poder enviarlas a todos los departamentos de regalos.

Sin embargo ya son muy viejas y no funcionan muy bien. Cada vez que hacen una copia, la calidad de la copia disminuye ligeramente, un fenómeno conocido como pérdida generacional.

Necesitas detectar si una carta es una copia de otra. Las cartas son muy largas y no puedes leerlas, pero puedes compararlas con un algoritmo.

Existe una gran probabilidad de que un caracter se degrade en cada copia (¡no pasa siempre!). Y al ocurrir, la regla que sigue es:

- Los caracteres de la A a la Z se degradan de mayúsculas a minúsculas (A-Z ⇒ a-z)
- Las letras se degradan en una serie de caracteres en este orden: a-z ⇒ # ⇒ + ⇒ : ⇒ . ⇒
- Una vez degradadas las letras en los símbolos, se pueden continuar degradando.
- Ten en cuenta que el último es un espacio en blanco, no un caracter vacío.
- Los caracteres que no son letras (como los dígitos) no se degradan.

Sabiendo esto y recibiendo dos cartas. La supuesta original y la copia. Debes determinar si la copia es una copia de la otra.
*/

function checkIsValidCopy(original, copy) {
  // Definimos las degradaciones básicas
  const basicDegradations = {
    A: "a",
    B: "b",
    C: "c",
    D: "d",
    E: "e",
    F: "f",
    G: "g",
    H: "h",
    I: "i",
    J: "j",
    K: "k",
    L: "l",
    M: "m",
    N: "n",
    O: "o",
    P: "p",
    Q: "q",
    R: "r",
    S: "s",
    T: "t",
    U: "u",
    V: "v",
    W: "w",
    X: "x",
    Y: "y",
    Z: "z",
    a: "#",
    b: "#",
    c: "#",
    d: "#",
    e: "#",
    f: "#",
    g: "#",
    h: "#",
    i: "#",
    j: "#",
    k: "#",
    l: "#",
    m: "#",
    n: "#",
    o: "#",
    p: "#",
    q: "#",
    r: "#",
    s: "#",
    t: "#",
    u: "#",
    v: "#",
    w: "#",
    x: "#",
    y: "#",
    z: "#",
    "#": "+",
    "+": ":",
    ":": ".",
    ".": " ",
  };

  // Función para obtener todas las degradaciones posibles de un carácter
  function getAllDegradations(char) {
    let degradations = [char];
    while (basicDegradations[char]) {
      char = basicDegradations[char];
      degradations.push(char);
    }
    return degradations;
  }

  // Verificamos cada carácter
  if (original.length !== copy.length) return false;
  for (let i = 0; i < original.length; i++) {
    const originalChar = original[i];
    const copyChar = copy[i];
    const validDegradations = getAllDegradations(originalChar);

    if (!validDegradations.includes(copyChar)) {
      return false;
    }
  }
  return true;
}

console.log(checkIsValidCopy("Santa Claus", "s#+:. c:. s")); // true
console.log(checkIsValidCopy("Santa Claus", "s#+:.#c:. s")); // false (hay un # donde no debería)

/*
Para entender cómo funcionan las fotocopiadoras y su degradación, mira este ejemplo:

original:  'Santa Claus'
1ª copia:  'santa cla#s'
2ª copia:  'sa#t# cl#+s'
3ª copia:  'sa+## c#+:s'
4ª copia:  's#++. c+:.s'
5ª copia:  's#+:. c:. s'

Por lo tanto s#+:. c+:++ es una copia válida de Santa Claus. Y, como ves, la degradación de las letras no se produce en un orden específico, es aleatorio.

Basado en el desafío de CodeWars Photocopy decay
*/
