const sum = require('./index');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

describe("test sum", () => {
    it("sum 1 + 0 to equal 1", () => {
      const result = sum(1, 0);
      expect(result).toBe(1);
    }),
      it("msum 1 + 1 to equal 2", () => {
        const result = sum(1, 1);
        expect(result).toBe(2);
      });
  });