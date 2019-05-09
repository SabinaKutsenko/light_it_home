export function gavg(arr) {
  let sumArr = arr.reduce((acc, item) => acc * item);
  return Math.pow(sumArr, 1 / arr.length);
}

export function random(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  rand = Math.floor(rand);
  return rand;
}
