/*
Reto #14: 🚨 Evita la alarma

Con el tema de las redes sociales, Santa Claus tiene pánico que los niños se despierten mientras él está repartiendo regalos en sus casos, usen el móvil para grabarlo y se haga viral en TikTok.

Quiere evitarlo a toda costa. Cada casa en esa calle tiene un número de regalos preparados. Sin embargo, las casas tienen un sistema de seguridad conectado entre casas adyacentes, por lo que no puede dejar los regalos en dos casas seguidas, o se activará la alarma que alertará a los niños.

Dada un array de enteros no negativos regalos que representa la cantidad de regalos en cada casa, tu tarea es ayudar a Papá Noel a determinar la máxima cantidad de regalos que puede entregar en una noche sin activar ninguna alarma.
*/

function maxGifts(houses) {
  if (houses.length === 0) {
    return 0;
  }
  if (houses.length === 1) {
    return houses[0];
  }

  let maxGifts = [];
  maxGifts[0] = houses[0];
  maxGifts[1] = Math.max(houses[0], houses[1]);

  for (let i = 2; i < houses.length; i++) {
    maxGifts[i] = Math.max(maxGifts[i - 1], maxGifts[i - 2] + houses[i]);
  }

  console.log(maxGifts[houses.length - 1]);
  return maxGifts[houses.length - 1];
}

maxGifts([2, 4, 2]); // 4 (4)
maxGifts([5, 1, 1, 5]); // 10 (5 + 5)
maxGifts([4, 1, 1, 4, 2, 1]); // 9 (4 + 4 + 1)
maxGifts([1, 3, 1, 3, 100]); // 103 (3 + 100)
