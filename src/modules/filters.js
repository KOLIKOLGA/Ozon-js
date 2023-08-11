export const searchFilters = (goods, value) => {
  return goods.filter((goodsItem) => {
    return goodsItem.title.includes(value);
  });
};
