import { doubleNumber } from "../src/doubleNumber.js"

test("should return [2, 2] if we pass [1, 1] to the function", () => {
    expect(doubleNumber([1, 1])).toEqual([2, 2]);
});

test("should return [4, 2, 100, 20] if we pass [2, 1, 50, 10] to the function", () => {
    expect(doubleNumber([2, 1, 50, 10])).toEqual([4, 2, 100, 20]);
});

test("should return [0, 0, 0] if we pass [0, 0, 0] to the function", () => {
    expect(doubleNumber([0, 0, 0])).toEqual([0, 0, 0]);
});

// bonus test
test("should return [NaN, NaN, 10] if we pass ['1', 'Sergio', 5] to the function", () => {
    expect(doubleNumber(['1', 'Sergio', 5])).toEqual([NaN, NaN, 10]);
});
