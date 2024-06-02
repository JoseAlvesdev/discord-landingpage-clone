export function range(start: number, stop: number, step: number = 1) {
  const isPositive = step > 0;
  let numbers: Array<number> = [];

  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  for (let i: number = start; isPositive ? i < stop : i > stop; i += step) {
    numbers.push(i);
  }

  return numbers;
}
