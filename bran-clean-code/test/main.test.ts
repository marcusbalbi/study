import { sum } from "../src/main";

describe("test sum", () => {
  test('sum', () => {
    expect(sum(2, 2)).toBe(4);
  })
});
