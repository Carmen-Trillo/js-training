import { whatType } from "../src/whatType";

test("should return ['number', 'number'] if we pass [23, 11]", () => {
    expect(whatType([23, 11])).toEqual(['number', 'number'])
});

test("should return ['number', 'string', 'boolean'] if we pass [23, 'Marcos', true]", () => {
    expect(whatType([23, 'Marcos', true])).toEqual(['number', 'string', 'boolean'])
})

test("should return ['object', 'array', 'function'] if we pass [{}, [], () => {}]", () => {
    expect(whatType([{}, [], () => {}])).toEqual(['object', 'object', 'function'])
})