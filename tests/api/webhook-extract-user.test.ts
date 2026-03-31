import { describe, it, expect } from "vitest";
import { extractUserId } from "@/app/api/webhooks/creem/handlers";

describe("extractUserId", () => {
  it("extracts user_id from metadata", () => {
    expect(extractUserId({ user_id: "usr_123" })).toBe("usr_123");
  });

  it("returns undefined when metadata is undefined", () => {
    expect(extractUserId(undefined)).toBeUndefined();
  });

  it("returns undefined when user_id is not in metadata", () => {
    expect(extractUserId({ other: "value" })).toBeUndefined();
  });

  it("returns empty string when user_id is empty", () => {
    expect(extractUserId({ user_id: "" })).toBe("");
  });
});
