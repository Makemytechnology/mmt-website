export type PositioningRow = {
  method: string;
  environment: string;
  accuracy: string;
};

export const positioningMethods: PositioningRow[] = [
  { method: "E-CID", environment: "Outdoor cellular", accuracy: "~50 m" },
  { method: "Multi-RTT", environment: "Indoor/outdoor", accuracy: "1–3 m" },
  { method: "DL-TDOA", environment: "Outdoor dense", accuracy: "1–5 m" },
  { method: "A-GNSS", environment: "Outdoor", accuracy: "< 1 m" },
  { method: "Geofencing", environment: "Any", accuracy: "Zone-based" },
  { method: "Hybrid", environment: "Any", accuracy: "Adaptive" },
];
