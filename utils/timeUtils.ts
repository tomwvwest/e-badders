export default function convertSecondsToTimer(totalSeconds: number): string{
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds - (60 * minutes);

  let minutesString = timeUnitToString(minutes);
  let secondsString = timeUnitToString(seconds);

  return minutesString + ':' + secondsString;
}

function timeUnitToString(int: number){
  let intString = int.toString();

  if(int < 10) intString = `0${int}`

  return intString;
}