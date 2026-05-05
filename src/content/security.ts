export type SecurityRow = {
  primitive: string;
  spec: string;
  verification: string;
};

export const securityPrimitives: SecurityRow[] = [
  { primitive: "Milenage f1/f2345/f5*", spec: "TS 35.205/206/207", verification: "Test Set 1 — byte-exact" },
  { primitive: "AES-CMAC", spec: "NIST SP 800-38B / RFC 4493", verification: "All 4 canonical vectors" },
  { primitive: "HMAC-SHA-256 KDF", spec: "RFC 4231", verification: "Vector 1" },
  { primitive: "NEA2 (AES-CTR)", spec: "TS 33.401 Annex B.1", verification: "Round-trip verified" },
  { primitive: "NIA2 (AES-CMAC MAC)", spec: "TS 33.401 Annex B.2", verification: "MAC shape + COUNT sensitivity" },
  { primitive: "5G KDF (A2-A9)", spec: "TS 33.501 Annex A", verification: "Key length + derivation chain" },
];
