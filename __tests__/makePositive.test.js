import { makePositive } from "../src/makePositive";

test("should return [1, 2] if we pass [-1, -2]", () => {
    expect(makePositive([-1, -2])).toEqual([1, 2]);
});

test("should return [1, 2, 3, 4, 5] if we pass [-1, 2, 3, -4, 5]", () => {
    expect(makePositive([-1, 2, 3, -4, 5])).toEqual([1, 2, 3, 4, 5]);
});

test("should return [11, 0, 2023] if we pass [-11, 0, -2023]", () => {
    expect(makePositive([-11, 0, -2023])).toEqual([11, 0, 2023]);
});
