export const repetationsOf = (item, array) => {
  let count = 0;
  array.forEach((val) => {
    if (val == item) count++;
  });
  return count;
};
