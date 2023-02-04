import { findName } from "../src/findName.js"

test("should return 'Ana' if we pass ['Ainhoa', 'Aldara', 'Ana', 'Anyi', 'Carmen', 'Cele', 'Celia'] and 'Ana'", () => {
    expect(findName(['Ainhoa', 'Aldara', 'Ana', 'Anyi', 'Carmen', 'Cele', 'Celia'], 'Ana')).toBe('Ana');
});

test("should return 'Jennifer' if we pass ['Jennifer', 'Jennifer', 'Jennifer'] and 'Jennifer'", () => {
    expect(findName(['Jennifer', 'Jennifer', 'Jennifer'], 'Jennifer')).toBe('Jennifer');
});

// bonus test
test("should return 'Name not found' if we pass ['Ainhoa', 'Aldara', 'Ana', 'Anyi', 'Carmen', 'Cele', 'Celia'] and 'Alexandra'", () => {
    expect(findName(['Ainhoa', 'Aldara', 'Ana', 'Anyi', 'Carmen', 'Cele', 'Celia'], 'Alexandra')).toBe('Name not found');
});
