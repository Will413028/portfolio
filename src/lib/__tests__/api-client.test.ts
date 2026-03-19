import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { ApiError, apiClient } from "@/lib/api-client";

describe("ApiError", () => {
  test("sets status, message, and name", () => {
    const err = new ApiError(404, "Not Found");
    expect(err.status).toBe(404);
    expect(err.message).toBe("Not Found");
    expect(err.name).toBe("ApiError");
  });

  test("inherits from Error", () => {
    const err = new ApiError(500, "Server Error");
    expect(err).toBeInstanceOf(Error);
  });

  test("stores errors record", () => {
    const errors = { email: ["Invalid email"] };
    const err = new ApiError(422, "Validation Error", errors);
    expect(err.errors).toEqual(errors);
  });
});

describe("apiClient", () => {
  const mockFetch = vi.fn();

  beforeEach(() => {
    vi.stubGlobal("fetch", mockFetch);
    vi.stubGlobal("localStorage", {
      getItem: vi.fn(() => "test-token"),
      setItem: vi.fn(),
      removeItem: vi.fn(),
    });
    process.env.NEXT_PUBLIC_API_URL = "http://localhost:3000/api";
  });

  afterEach(() => {
    vi.unstubAllGlobals();
    delete process.env.NEXT_PUBLIC_API_URL;
  });

  test("GET sends correct method and auth header", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ data: "test" }),
    });

    await apiClient.get("/users");

    expect(mockFetch).toHaveBeenCalledOnce();
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toContain("/users");
    expect(options.method).toBe("GET");
    expect(options.headers.get("Authorization")).toBe("Bearer test-token");
  });

  test("POST sends JSON body with Content-Type", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve({ id: 1 }),
    });

    await apiClient.post("/users", { name: "John" });

    const [, options] = mockFetch.mock.calls[0];
    expect(options.method).toBe("POST");
    expect(options.headers.get("Content-Type")).toBe("application/json");
    expect(options.body).toBe(JSON.stringify({ name: "John" }));
  });

  test("appends query params for GET", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 200,
      json: () => Promise.resolve([]),
    });

    await apiClient.get("/search", { params: { q: "test" } });

    const [url] = mockFetch.mock.calls[0];
    expect(url).toContain("q=test");
  });

  test("throws ApiError on non-ok response", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 401,
      statusText: "Unauthorized",
      json: () => Promise.resolve({ message: "Invalid token" }),
    });

    await expect(apiClient.get("/protected")).rejects.toThrow(ApiError);
    await expect(apiClient.get("/protected")).rejects.toMatchObject({
      status: 401,
    });
  });

  test("handles non-JSON error body", async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 500,
      statusText: "Internal Server Error",
      json: () => Promise.reject(new Error("not json")),
    });

    await expect(apiClient.get("/fail")).rejects.toThrow(ApiError);
  });

  test("returns undefined for 204 response", async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      status: 204,
    });

    const result = await apiClient.delete("/items/1");
    expect(result).toBeUndefined();
  });
});
