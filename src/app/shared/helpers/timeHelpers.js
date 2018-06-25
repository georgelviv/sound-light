const SECONDS_PER_MINUTE = 60;

const converSecondsInMinutes = (seconds) => {
  let minutes = String(Math.floor(seconds / SECONDS_PER_MINUTE));
  let secondsLeft = String(seconds - (minutes * SECONDS_PER_MINUTE));
  if (secondsLeft < 10) {
    secondsLeft = '0' + secondsLeft;
  }
  return `${ minutes }:${ secondsLeft }`;
}

export { converSecondsInMinutes };