export const formatNumber = (number: number) => {
  if (number < 10_000) {
    return String(number);
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  // return `${String(price)} ₽`;
};
