/**
 * Returns random date between given range.
 *
 * @return {Date} random date.
 */
export const getRandomDate = (start: Date, end: Date) =>
  new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
