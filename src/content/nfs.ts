// 13 5G Core NFs implemented in the Studio Core repo (core/ directory):
// AMF, SMF, UPF, AUSF, UDM, UDR, NSSF, PCF, CHF, NWDAF, AF, LMF, GMLC.
export const coreNfs: string[] = [
  "AMF",
  "SMF",
  "UPF",
  "AUSF",
  "UDM",
  "UDR",
  "NSSF",
  "PCF",
  "CHF",
  "NWDAF",
  "AF",
  "LMF",
  "GMLC",
];

// Higher-layer services (services/ directory) + functional modules in core/:
// IMS · MCX · MEC · eSIM · V2X · NTN · IoT · DPI · LI · Emergency.
export const companionServices: string[] = [
  "IMS",
  "MCX",
  "MEC",
  "eSIM",
  "V2X",
  "NTN",
  "IoT",
  "DPI / LI / Emergency",
];
