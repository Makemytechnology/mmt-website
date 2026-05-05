export type Dnn = {
  name: string;
  accent: string;
  description: string;
  protocols: string;
};

export const dnns: Dnn[] = [
  { name: "internet", accent: "#4A90C2", description: "General Data + FWA", protocols: "QoS, Slicing, RedCap, MEC" },
  { name: "ims", accent: "#7FB7DB", description: "VoNR / ViNR / VoWiFi", protocols: "SIP, IMS-AKA, 6-way Conf" },
  { name: "mcx", accent: "#E85A4F", description: "Mission Critical PTT", protocols: "MCPTT, MCVideo, MCData" },
  { name: "iot", accent: "#F2A65A", description: "IoT / M2M / NIDD", protocols: "oneM2M, PSM, eDRX, Ambient" },
  { name: "location", accent: "#5EBFA3", description: "Positioning / LBS", protocols: "E-CID, RTT, TDOA, Geofence" },
  { name: "enterprise", accent: "#8E6FC1", description: "Private 5G / MEC", protocols: "ULCL, I-UPF, DPI, Edge" },
  { name: "emergency", accent: "#D8506E", description: "E911 / NTN Satellite", protocols: "Priority, GMLC, NTN" },
  { name: "v2x", accent: "#E5C04A", description: "Vehicle / Drone", protocols: "V2X sidelink, URLLC, UAV" },
];
