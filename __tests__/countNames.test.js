import { countNames } from "../src/countNames.js"

test("should return 1 if we pass ['Miriam', 'Marcos', 'Sergio'] and 'Marcos' to the function", () => {
    expect(countNames(['Miriam', 'Marcos', 'Sergio'], 'Marcos')).toEqual(1);
});

test("should return 7 if we pass ['Miriam', 'Marcos', 'Sergio', 'Marcos', 'Marcos', 'Marcos', 'Marcos', 'Marcos', 'Marcos'] and 'Marcos' to the function", () => {
    expect(countNames(['Miriam', 'Marcos', 'Sergio', 'Marcos', 'Marcos', 'Marcos', 'Marcos', 'Marcos', 'Marcos'], 'Marcos')).toEqual(7);
});

test("should return 0 if we pass ['Sergio', 'Miriam', 'Marcos'] and 'Laura' to the function", () => {
    expect(countNames(['Sergio', 'Miriam', 'Marcos'], 'Laura')).toEqual(0);
});

// bonus test
test("should return 3 if we pass ['Sergio', 'Miriam', 'sergio', 'Marcos', 'serGio'] and 'Sergio' to the function", () => {
    expect(countNames(['Sergio', 'Miriam', 'sergio', 'Marcos', 'serGio'], 'Sergio')).toEqual(3);
});
