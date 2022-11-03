//👉 Write your tests below here:
import { test, expect } from '@jest/globals'
import { descendingOrder } from "./main";

test("Checks descending order for 0", () => {
    const actual = descendingOrder(0)
    const expected = 0
    expect(actual).toStrictEqual(expected)
});

test("Checks descending order for 12", () => {
    const actual = descendingOrder(12)
    const expected = 21
    expect(actual).toStrictEqual(expected)
});

test("Checks descending order for 89754258", () => {
    const actual = descendingOrder(89754258)
    const expected = 98875542
    expect(actual).toStrictEqual(expected)
});

test("Checks descending order for 4446669", () => {
    const actual = descendingOrder(4446669)
    const expected = 9666444
    expect(actual).toStrictEqual(expected)
});

test("Checks descending order for 986724156", () => {
    const actual = descendingOrder(986724156)
    const expected = 987665421
    expect(actual).toStrictEqual(expected)
});