import { describe, expect, test } from "vitest";
import {
  fadeIn,
  pageTransition,
  scaleIn,
  slideDown,
  slideUp,
  staggerContainer,
  staggerItem,
} from "@/lib/animations";

describe("animation variants", () => {
  test("fadeIn has hidden and visible", () => {
    expect(fadeIn).toHaveProperty("hidden");
    expect(fadeIn).toHaveProperty("visible");
  });

  test("slideUp has hidden and visible", () => {
    expect(slideUp).toHaveProperty("hidden");
    expect(slideUp).toHaveProperty("visible");
  });

  test("slideDown has hidden and visible", () => {
    expect(slideDown).toHaveProperty("hidden");
    expect(slideDown).toHaveProperty("visible");
  });

  test("scaleIn has hidden and visible", () => {
    expect(scaleIn).toHaveProperty("hidden");
    expect(scaleIn).toHaveProperty("visible");
  });

  test("staggerContainer has staggerChildren in visible transition", () => {
    const visible = staggerContainer.visible as {
      transition: { staggerChildren: number };
    };
    expect(visible.transition.staggerChildren).toBeDefined();
  });

  test("staggerItem has hidden and visible", () => {
    expect(staggerItem).toHaveProperty("hidden");
    expect(staggerItem).toHaveProperty("visible");
  });

  test("pageTransition has initial, animate, and exit", () => {
    expect(pageTransition).toHaveProperty("initial");
    expect(pageTransition).toHaveProperty("animate");
    expect(pageTransition).toHaveProperty("exit");
  });
});
