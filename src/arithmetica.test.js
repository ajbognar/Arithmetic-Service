const { add } = require("./arithmetica")
const { subtract } = require("./arithmetica")
const { multiply } = require("./arithmetica")
const { divide } = require("./arithmetica")

test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});
test('209999999999 + 300000000001 is equal to 510000000000', () => {
    expect(add(209999999999, 300000000001)).toBe(510000000000);
});


test('5 - 3 is equal to 2', () => {
    expect(subtract(5, 3)).toBe(2);
});
test('500000000000 - 300000000001 is equal to 199999999999', () => {
    expect(subtract(500000000000, 300000000001)).toBe(199999999999);
});


test('2 * 3 is equal to 6', () => {
    expect(multiply(2, 3)).toBe(6);
});
test('999 * 999 is equal to 998001', () => {
    expect(multiply(999, 999)).toBe(998001);
});


test('6 / 3 is equal to 2', () => {
    expect(divide(6, 3)).toBe(2);
});
test('554445 / 999 is equal to 555', () => {
    expect(divide(554445, 999)).toBe(555);
});