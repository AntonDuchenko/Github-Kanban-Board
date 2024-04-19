export const calculateDays = (date: string) => {
  const oldDate = new Date(date);
  const now = new Date();

  const diffInTime = now.getTime() - oldDate.getTime();
  const diffInDays = diffInTime / (1000 * 3600 * 24);

  return Math.floor(diffInDays);
};
