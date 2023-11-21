import parseDate from "../Components/parseDate";

test('parses 10-10-2002', () => {
    const parsedDate = new Date(2002, 9, 10);

    expect(parseDate("2002-10-10")).toStrictEqual(parsedDate);
});

test('parses fake date', () => {

    expect(parseDate("200222-22")).toStrictEqual(null);
});

