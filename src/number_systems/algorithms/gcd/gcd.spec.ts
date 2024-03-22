import { describe, expect, it } from "@jest/globals";
import gcd from "./index";

describe("GCD Euclidean", (): void => {
  it("should return the correct GCD", () => {
    expect(gcd(10, 5)).toBe(5);
  });
});
