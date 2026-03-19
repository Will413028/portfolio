import { describe, expect, test } from "vitest";
import {
  contactFormSchema,
  emailSchema,
  loginSchema,
  paginationSchema,
  passwordSchema,
  phoneSchema,
  urlSchema,
} from "@/lib/validations";

describe("emailSchema", () => {
  test("accepts valid email", () => {
    expect(emailSchema.safeParse("user@example.com").success).toBe(true);
  });

  test("rejects invalid email", () => {
    const result = emailSchema.safeParse("not-an-email");
    expect(result.success).toBe(false);
  });

  test("rejects empty string", () => {
    expect(emailSchema.safeParse("").success).toBe(false);
  });
});

describe("passwordSchema", () => {
  test("accepts 8-character password", () => {
    expect(passwordSchema.safeParse("12345678").success).toBe(true);
  });

  test("rejects 7-character password", () => {
    expect(passwordSchema.safeParse("1234567").success).toBe(false);
  });

  test("accepts 100-character password", () => {
    expect(passwordSchema.safeParse("a".repeat(100)).success).toBe(true);
  });

  test("rejects 101-character password", () => {
    expect(passwordSchema.safeParse("a".repeat(101)).success).toBe(false);
  });
});

describe("phoneSchema", () => {
  test("accepts valid international number", () => {
    expect(phoneSchema.safeParse("+14155551234").success).toBe(true);
  });

  test("accepts number without plus", () => {
    expect(phoneSchema.safeParse("14155551234").success).toBe(true);
  });

  test("rejects letters", () => {
    expect(phoneSchema.safeParse("abc").success).toBe(false);
  });

  test("rejects number starting with 0", () => {
    expect(phoneSchema.safeParse("0123456789").success).toBe(false);
  });
});

describe("urlSchema", () => {
  test("accepts valid URL", () => {
    expect(urlSchema.safeParse("https://example.com").success).toBe(true);
  });

  test("rejects bare string", () => {
    expect(urlSchema.safeParse("not-a-url").success).toBe(false);
  });
});

describe("paginationSchema", () => {
  test("applies defaults", () => {
    const result = paginationSchema.parse({});
    expect(result.page).toBe(1);
    expect(result.pageSize).toBe(20);
  });

  test("coerces strings to numbers", () => {
    const result = paginationSchema.parse({ page: "3", pageSize: "50" });
    expect(result.page).toBe(3);
    expect(result.pageSize).toBe(50);
  });

  test("rejects pageSize over 100", () => {
    expect(paginationSchema.safeParse({ pageSize: 101 }).success).toBe(false);
  });

  test("rejects negative page", () => {
    expect(paginationSchema.safeParse({ page: -1 }).success).toBe(false);
  });
});

describe("loginSchema", () => {
  test("accepts valid input", () => {
    expect(
      loginSchema.safeParse({
        email: "user@example.com",
        password: "12345678",
      }).success,
    ).toBe(true);
  });

  test("rejects missing email", () => {
    expect(loginSchema.safeParse({ password: "12345678" }).success).toBe(false);
  });

  test("rejects short password", () => {
    expect(
      loginSchema.safeParse({ email: "user@example.com", password: "123" })
        .success,
    ).toBe(false);
  });
});

describe("contactFormSchema", () => {
  test("accepts valid input", () => {
    expect(
      contactFormSchema.safeParse({
        name: "John",
        email: "john@example.com",
        message: "Hello, this is a message.",
      }).success,
    ).toBe(true);
  });

  test("rejects empty name", () => {
    expect(
      contactFormSchema.safeParse({
        name: "",
        email: "john@example.com",
        message: "Hello, this is a message.",
      }).success,
    ).toBe(false);
  });

  test("rejects short message", () => {
    expect(
      contactFormSchema.safeParse({
        name: "John",
        email: "john@example.com",
        message: "Hi",
      }).success,
    ).toBe(false);
  });

  test("rejects message over 5000 chars", () => {
    expect(
      contactFormSchema.safeParse({
        name: "John",
        email: "john@example.com",
        message: "a".repeat(5001),
      }).success,
    ).toBe(false);
  });
});
