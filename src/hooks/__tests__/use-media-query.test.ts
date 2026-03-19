import { renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { useMediaQuery } from "@/hooks/use-media-query";

describe("useMediaQuery", () => {
  let listeners: Map<string, (() => void)[]>;

  beforeEach(() => {
    listeners = new Map();

    vi.stubGlobal(
      "matchMedia",
      vi.fn((query: string) => ({
        matches: query === "(min-width: 768px)",
        media: query,
        addEventListener: (_event: string, callback: () => void) => {
          const list = listeners.get(query) || [];
          list.push(callback);
          listeners.set(query, list);
        },
        removeEventListener: (_event: string, callback: () => void) => {
          const list = listeners.get(query) || [];
          listeners.set(
            query,
            list.filter((cb) => cb !== callback),
          );
        },
      })),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  test("returns true when media query matches", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  test("returns false when media query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 1024px)"));
    expect(result.current).toBe(false);
  });

  test("cleans up listener on unmount", () => {
    const { unmount } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    const before = listeners.get("(min-width: 768px)")?.length ?? 0;
    unmount();
    const after = listeners.get("(min-width: 768px)")?.length ?? 0;
    expect(after).toBeLessThan(before);
  });
});
