import UserObject from "../Classes/UserObject";

test("getAddrLine1 for '525 E 86th Street, New York, NY 10651-78'", () => {
    let user = new UserObject("John", "Doe", "j.doe", "jane123", "12345678", "john@hotmail.com", "525 E 86th Street, New York, NY 10651-78")
    const expected = '525 E 86th Street';
    expect(user.getAddrLine1()).toStrictEqual(expected);
})

test("getAddrLine1 for 'not good'", () => {
    let user = new UserObject("John", "Doe", "j.doe", "jane123", "12345678", "john@hotmail.com", "not good")
    const expected = 'invalid address';
    expect(user.getAddrLine1()).toStrictEqual(expected);
})