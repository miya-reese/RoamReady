import getItemType from "../Components/AddItem/getItemType";

test("activity type", () => {
    expect(getItemType("Activity")).toBe(2);
})

test("transportation type", () => {
    expect(getItemType("Transportation")).toBe(0);
})