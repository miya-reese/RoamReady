import isValidAddress from "../Classes/UserObject"

test("isValidAddress for '525 E 86th Street, New York, NY 10651-78'", () => {
    const validAddress = '525 E 86th Street, New York, NY 10651-78';

    expect(isValidAddress(validAddress)).toBeTruthy();
});

test("isValidAddress for '525 E 86th Street, NY'", () => {
    const invalidAddress = '525 E 86th Street, NY';

    expect(isValidAddress(invalidAddress)).toBeFalsy();
});