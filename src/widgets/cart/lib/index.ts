export const getAmountWord = (number: number) => {
  // покрывает не все кейсы
  switch (number) {
    case 1:
      return 'товар';
    case 2:
    case 3:
    case 4:
      return 'товара';
    default:
      return 'товаров';
  }
};
