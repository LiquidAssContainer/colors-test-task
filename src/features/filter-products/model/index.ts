interface Filter {
  name: string;
  label: string;
}

export const filters: Filter[] = [
  { name: 'new', label: 'Новинки' },
  { name: 'available', label: 'Есть в наличии' },
  { name: 'contract', label: 'Контрактные' },
  { name: 'exclusive', label: 'Эксклюзивные' },
  { name: 'sale', label: 'Распродажа' },
];
