import UserObject from "../Classes/UserObject";

test("isValidAddress for '525 E 86th Street, New York, NY 10651-78'", () => {
    let user = new UserObject("John", "Doe", "j.doe", "jane123", "12345678", "john@hotmail.com", "525 E 86th Street, New York, NY 10651-78");
    const validAddress = '525 E 86th Street, New York, NY 10651-78';
    user.setAddress(validAddress);

    expect(user.isValidAddress()).toBeTruthy();
});

test("isValidAddress for '525 E 86th Street, NY'", () => {
    let user = new UserObject("John", "Doe", "j.doe", "jane123", "12345678", "john@hotmail.com", "525 E 86th Street, New York, NY 10651-78");
    const invalidAddress = '525 E 86th Street, NY';
    user.setAddress(invalidAddress);

    expect(user.isValidAddress()).toBeFalsy();
});