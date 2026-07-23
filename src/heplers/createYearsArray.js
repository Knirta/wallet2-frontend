export const createYearsArray = (start, end) => {
  let years = [];
  for (let i = start; i <= end; i++) {
    years.push(i);
  }
  return years.reverse();
};
