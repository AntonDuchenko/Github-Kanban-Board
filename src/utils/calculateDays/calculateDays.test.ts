import { calculateDays } from "./calculateDays";

describe("calculateDays", () => {
  it("returns the correct number of days", () => {
    const timestamp = Date.now();
    const date = new Date(timestamp).toISOString();

    const result = calculateDays(date);

    expect(result).toBe(0);
  });
});
