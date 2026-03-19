import { describe, expect, test } from "vitest";
import { loginSchema, registerSchema } from "@/features/auth/validations";

describe("auth loginSchema", () => {
  test("accepts valid credentials", () => {
    expect(
      loginSchema.safeParse({
        email: "user@example.com",
        password: "password123",
      }).success,
    ).toBe(true);
  });

  test("rejects invalid email", () => {
    expect(
      loginSchema.safeParse({ email: "bad", password: "password123" }).success,
    ).toBe(false);
  });

  test("rejects password under 8 chars", () => {
    expect(
      loginSchema.safeParse({ email: "user@example.com", password: "short" })
        .success,
    ).toBe(false);
  });
});

describe("registerSchema", () => {
  const validData = {
    email: "user@example.com",
    password: "password123",
    name: "John Doe",
    confirmPassword: "password123",
  };

  test("accepts valid registration", () => {
    expect(registerSchema.safeParse(validData).success).toBe(true);
  });

  test("rejects name under 2 chars", () => {
    expect(registerSchema.safeParse({ ...validData, name: "J" }).success).toBe(
      false,
    );
  });

  test("rejects mismatched passwords", () => {
    const result = registerSchema.safeParse({
      ...validData,
      confirmPassword: "different123",
    });
    expect(result.success).toBe(false);
  });

  test("password mismatch error is on confirmPassword path", () => {
    const result = registerSchema.safeParse({
      ...validData,
      confirmPassword: "different123",
    });
    if (!result.success) {
      const paths = result.error.issues.map((i) => i.path.join("."));
      expect(paths).toContain("confirmPassword");
    }
  });
});
