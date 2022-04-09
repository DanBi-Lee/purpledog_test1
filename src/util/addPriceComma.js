export const addPriceComma = (price) => {
  if (typeof price !== "number") {
    return price;
  }
  return price.toLocaleString();
};
