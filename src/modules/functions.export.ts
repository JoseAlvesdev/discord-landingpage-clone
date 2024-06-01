export function range(start: number, stop: number, step = 1) {
  const isPositive = step > 0;
  let numbers = [];

  if (stop === undefined) {
    stop = start;
    start = 0;
  }

  for (let i = start; isPositive ? i < stop : i > stop; i += step) {
    numbers.push(i);
  }

  return numbers;
}
