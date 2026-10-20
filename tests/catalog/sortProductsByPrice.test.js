const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortedIndexes = sortProductsByPrice(products, "asc").map(
      ({ id }) => id,
    );
    expect(sortedIndexes).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("все товары без направления сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const sortedIndexes = sortProductsByPrice(products).map(({ id }) => id);
    expect(sortedIndexes).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
    const sortedProducts134 = sortProductsByPrice(products, "asc")
      .filter(({ id }) => [1, 3, 4].includes(id))
      .map(({ id }) => id);
    expect(sortedProducts134).toEqual([3, 4, 1]);
  });
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
    const sortedProductsDesc = sortProductsByPrice(products, "desc").map(
      ({ id }) => id,
    );

    expect(sortedProductsDesc).toEqual([1, 2, 4, 5, 6, 3]);
  });
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
    const sortedProducts314 = sortProductsByPrice(products, "desc")
      .filter(({ id }) => [3, 1, 4].includes(id))
      .map(({ id }) => id);
    expect(sortedProducts314).toEqual([1, 4, 3]);
  });
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
    const sortedProducts314 = sortProductsByPrice(products, "desc")
      .filter(({ id }) => [5, 2, 6].includes(id))
      .map(({ id }) => id);
    expect(sortedProducts314).toEqual([2, 5, 6]);
  });
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const native = [1, 3, 4];
    sortProductsByPrice(native, "asc");
    expect(native).toEqual([1, 3, 4]);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]", () => {
    const native = [1, 3, 4];
    sortProductsByPrice(native, "desc");
    expect(native).toEqual([1, 3, 4]);
  });
  test("направление по умолчанию не меняет исходный массив всех товаров", () => {
    const native = [...products];
    sortProductsByPrice(native);
    expect(native).toEqual(products);
  });
});
