const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const productId1 = searchProducts(products, "Наушники").map(
      ({ id }) => id,
    )[0];
    expect(productId1).toEqual(1);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const productId6 = searchProducts(products, "Чистый код").map(
      ({ id }) => id,
    )[0];
    expect(productId6).toEqual(6);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const productId4 = searchProducts(products, "Настольная лампа").map(
      ({ id }) => id,
    )[0];
    expect(productId4).toEqual(4);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const productId3 = searchProducts(products, "javascript").map(
      ({ id }) => id,
    )[0];
    expect(productId3).toEqual(3);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const productId5 = searchProducts(products, "ЧЕХОЛ").map(
      ({ id }) => id,
    )[0];
    expect(productId5).toEqual(5);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const productId1 = searchProducts(products, "наушники").map(
      ({ id }) => id,
    )[0];
    expect(productId1).toEqual(1);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const productsEmpty = searchProducts(products, "").map(
      ({ id }) => id,
    );
    expect(productsEmpty).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
        const productsSpaces = searchProducts(products, "  ").map(
      ({ id }) => id,
    );
    expect(productsSpaces).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
        const productsEmptyStr = searchProducts(products, "\t\n").map(
      ({ id }) => id,
    );
    expect(productsEmptyStr).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
