/*
Reto #5: El CyberTruck de Santa.

Santa 🎅 está probando su nuevo trineo eléctrico, el CyberReindeer, en una carretera del Polo Norte. La carretera se representa con una cadena de caracteres, donde:

. = Carretera
S = Trineo de Santa
* = Barrera abierta
| = Barrera cerrada
Ejemplo de carretera: S...|....|.....

Cada unidad de tiempo, el trineo avanza una posición a la derecha. Si encuentra una barrera cerrada, se detiene hasta que la barrera se abra. Si está abierta, la atraviesa directamente.

Todas las barreras empiezan cerradas, pero después de 5 unidades de tiempo, se abren todas para siempre.

Crea una función que simule el movimiento del trineo durante un tiempo dado y devuelva un array de cadenas representando el estado de la carretera en cada unidad de tiempo:
*/

function cyberReindeer(road, time) {
  let states = [];
  let trineoIndex = road.indexOf("S");
  let barriersOpen = false;

  for (let t = 0; t < time; t++) {
    // Añadimos el estado actual al arreglo de estados
    states.push(road);

    // Revisamos si ha llegado el momento de abrir las barreras
    if (t === 4) {
      barriersOpen = true;
      road = road.replace(/\|/g, "*"); // Cambiamos todas las barreras cerradas a abiertas
    }

    // Mover el trineo si la siguiente posición no es una barrera cerrada
    // o si las barreras han sido abiertas
    if (barriersOpen || road[trineoIndex + 1] !== "|") {
      // Asegurarse de que el trineo no se mueva fuera de la carretera
      if (trineoIndex < road.length - 1) {
        // Construir el nuevo estado de la carretera
        road =
          road.substring(0, trineoIndex) +
          "." +
          "S" +
          road.substring(trineoIndex + 2);
        trineoIndex++; // Actualizar el índice del trineo
      }
    }
  }
  // Añadir el estado final después de la última unidad de tiempo transcurrida
  states.push(road);

  return states;
}

const road = "S..*...*..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

console.log(result);

/* -> result:
[
  'S..|...|..', // estado inicial
  '.S.|...|..', // avanza el trineo la carretera
  '..S|...|..', // avanza el trineo la carretera
  '..S|...|..', // el trineo para en la barrera
  '..S|...|..', // el trineo para en la barrera
  '...S...*..', // se abre la barrera, el trineo avanza
  '...*S..*..', // avanza el trineo la carretera
  '...*.S.*..', // avanza el trineo la carretera
  '...*..S*..', // avanza el trineo la carretera
  '...*...S..', // avanza por la barrera abierta
]
*/
