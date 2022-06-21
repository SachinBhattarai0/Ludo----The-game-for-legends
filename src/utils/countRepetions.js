export const repetationsOf = (item, array) => {
  if (!item || !array) return;

  let count = 0;
  array.forEach((val) => {
    if (val === item) count++;
  });
  return count;
};