export const createYearsArray = (start, end) => {
  let years = [];
  let count = 0;
  for (let i = start; i <= end; i++) {
    years.push({ id: count, name: i });
    count++;
  }
  return years.reverse();
};
