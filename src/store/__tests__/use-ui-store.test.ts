import { beforeEach, describe, expect, test } from "vitest";
import { useUiStore } from "@/store/use-ui-store";

const initialState = {
  sidebarOpen: true,
  mobileMenuOpen: false,
  theme: "dark" as const,
};

describe("useUiStore", () => {
  beforeEach(() => {
    useUiStore.setState(initialState);
  });

  test("has correct initial state", () => {
    const state = useUiStore.getState();
    expect(state.sidebarOpen).toBe(true);
    expect(state.mobileMenuOpen).toBe(false);
    expect(state.theme).toBe("dark");
  });

  test("toggleSidebar flips sidebarOpen", () => {
    useUiStore.getState().toggleSidebar();
    expect(useUiStore.getState().sidebarOpen).toBe(false);
  });

  test("setSidebarOpen sets explicit value", () => {
    useUiStore.getState().setSidebarOpen(false);
    expect(useUiStore.getState().sidebarOpen).toBe(false);
  });

  test("toggleMobileMenu flips mobileMenuOpen", () => {
    useUiStore.getState().toggleMobileMenu();
    expect(useUiStore.getState().mobileMenuOpen).toBe(true);
  });

  test("setMobileMenuOpen sets explicit value", () => {
    useUiStore.getState().setMobileMenuOpen(true);
    expect(useUiStore.getState().mobileMenuOpen).toBe(true);
  });

  test("setTheme changes theme", () => {
    useUiStore.getState().setTheme("light");
    expect(useUiStore.getState().theme).toBe("light");
  });

  test("double toggle returns to original state", () => {
    useUiStore.getState().toggleSidebar();
    useUiStore.getState().toggleSidebar();
    expect(useUiStore.getState().sidebarOpen).toBe(true);
  });
});
