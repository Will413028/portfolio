import { describe, expect, test } from "vitest";
import { RESUME_PDF_FILENAME } from "@/lib/resume-file";

describe("resume download file name", () => {
  test("names the candidate and the role, not a generic resume.pdf", () => {
    expect(RESUME_PDF_FILENAME).toMatch(/^WillWu_[A-Za-z_]+\.pdf$/);
  });
});
