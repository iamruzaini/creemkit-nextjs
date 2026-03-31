import { describe, it, expect } from "vitest";
import {
  validateActivateRequest,
  validateValidateRequest,
  validateDeactivateRequest,
} from "@/app/api/licenses/validators";

describe("validateActivateRequest", () => {
  it("returns valid with key and instanceName", () => {
    const result = validateActivateRequest({ key: "LIC-123", instanceName: "My PC" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.key).toBe("LIC-123");
      expect(result.data.instanceName).toBe("My PC");
    }
  });

  it("rejects missing key", () => {
    const result = validateActivateRequest({ instanceName: "My PC" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("key is required");
  });

  it("rejects missing instanceName", () => {
    const result = validateActivateRequest({ key: "LIC-123" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("instanceName is required");
  });

  it("rejects non-string key", () => {
    const result = validateActivateRequest({ key: 123, instanceName: "My PC" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("key is required");
  });
});

describe("validateValidateRequest", () => {
  it("returns valid with key and instanceId", () => {
    const result = validateValidateRequest({ key: "LIC-123", instanceId: "inst_abc" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.key).toBe("LIC-123");
      expect(result.data.instanceId).toBe("inst_abc");
    }
  });

  it("rejects missing key", () => {
    const result = validateValidateRequest({ instanceId: "inst_abc" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("key is required");
  });

  it("rejects missing instanceId", () => {
    const result = validateValidateRequest({ key: "LIC-123" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("instanceId is required");
  });
});

describe("validateDeactivateRequest", () => {
  it("returns valid with key and instanceId", () => {
    const result = validateDeactivateRequest({ key: "LIC-123", instanceId: "inst_abc" });
    expect(result.valid).toBe(true);
    if (result.valid) {
      expect(result.data.key).toBe("LIC-123");
      expect(result.data.instanceId).toBe("inst_abc");
    }
  });

  it("rejects missing key", () => {
    const result = validateDeactivateRequest({ instanceId: "inst_abc" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("key is required");
  });

  it("rejects missing instanceId", () => {
    const result = validateDeactivateRequest({ key: "LIC-123" });
    expect(result.valid).toBe(false);
    if (!result.valid) expect(result.error).toBe("instanceId is required");
  });
});
