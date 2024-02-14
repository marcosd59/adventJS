/*
Reto #13: ⌚️ Calculando el tiempo

Los elfos están preparando la víspera de Navidad y necesitan tu ayuda para calcular si van sobrados o no de tiempo ⏳.

Para ello te pasan un array con la duración de cada entrega. El formato de la duración es HH:mm:ss, las entregas empiezan a las 00:00:00 y el límite de tiempo es 07:00:00.

Tu función debe devolver el tiempo que les faltará o el tiempo que les sobrará para terminar las entregas. El formato de la duración devuelta debe ser HH:mm:ss.

Si terminan antes de las 07:00:00, el tiempo restante hasta las 07:00:00 debe ser mostrado con un signo negativo. Por ejemplo, si sobran 1 hora y 30 minutos, devuelve -01:30:00
*/

function calculateTime(deliveries) {
  for (let i = 0; i < deliveries.length; i++) {
    let time = deliveries[i].split(":");
    let hours = parseInt(time[0]);
    let minutes = parseInt(time[1]);
    let seconds = parseInt(time[2]);

    if (i === 0) {
      var totalTime = hours * 3600 + minutes * 60 + seconds;
    } else {
      totalTime += hours * 3600 + minutes * 60 + seconds;
    }
  }

  let remainingTime = 25200 - totalTime;

  if (remainingTime <= 0) {
    remainingTime = Math.abs(remainingTime);
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let result = `${hours}:${minutes}:${seconds}`;
    console.log(result);
    return result;
  } else if (remainingTime > 0) {
    let hours = Math.floor(remainingTime / 3600);
    let minutes = Math.floor((remainingTime % 3600) / 60);
    let seconds = remainingTime % 60;

    if (hours < 10) {
      hours = "0" + hours;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    let result = `-${hours}:${minutes}:${seconds}`;
    console.log(result);
    return result;
  }
}

calculateTime(["02:00:00", "03:00:00", "02:00:00"]);
// '00:00:00'

calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
// '-02:20:00'

calculateTime(["02:00:00", "05:00:00", "00:30:00"]);
// '00:30:00'

calculateTime(["00:45:00", "00:45:00", "00:00:30", "00:00:30"]);
// '-05:29:00'
