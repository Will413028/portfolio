import { describe, expect, test } from "vitest";
import { fadeIn, slideUp } from "@/lib/animations";

describe("animation variants", () => {
  test("fadeIn has hidden and visible", () => {
    expect(fadeIn).toHaveProperty("hidden");
    expect(fadeIn).toHaveProperty("visible");
  });

  test("slideUp has hidden and visible", () => {
    expect(slideUp).toHaveProperty("hidden");
    expect(slideUp).toHaveProperty("visible");
  });
});
