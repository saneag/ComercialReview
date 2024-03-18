export function roundTo(n: number, digits: number) {
  var negative = false;
  if (digits === undefined) {
    digits = 0;
  }
  if (n < 0) {
    negative = true;
    n = n * -1;
  }
  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  let fixedNumberString = (Math.round(n) / multiplicator).toFixed(digits);
  if (negative) {
    fixedNumberString = (n * -1).toFixed(digits);
  }
  return Number(fixedNumberString);
}
