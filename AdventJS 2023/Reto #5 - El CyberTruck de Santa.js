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
  let arr = [];

  console.log(road);
  arr.push(road);

  for (let i = 0; i < road.length; i++) {
    if (road[i] === ".") {
      road = road.substring(0, i - 1) + "." + "S" + road.substring(i + 1);
      console.log(road);
      arr.push(road);
    } else if (road[i] === "*") {
      road = road.substring(0, i) + "*" + "S" + road.substring(i + 1);
      console.log(road);
      arr.push(road);
    }
  }

  return arr;
}

const road = "S..*...*..";
const time = 10; // unidades de tiempo
const result = cyberReindeer(road, time);

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
