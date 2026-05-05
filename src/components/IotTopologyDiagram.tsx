type Gateway = {
  id: string;
  label: string;
  tenant: string;
  color: string;
  x: number;
  sensors: { name: string; reading: string }[];
};

const gateways: Gateway[] = [
  {
    id: "gw1",
    label: "Gateway 1",
    tenant: "AI · FarmCo",
    color: "#5EBFA3",
    x: 80,
    sensors: [
      { name: "Soil", reading: "68%" },
      { name: "Temp", reading: "24°C" },
      { name: "Humid", reading: "72%" },
    ],
  },
  {
    id: "gw2",
    label: "Gateway 2",
    tenant: "AI · LogisticsCo",
    color: "#F2A65A",
    x: 230,
    sensors: [
      { name: "GPS", reading: "Active" },
      { name: "Weight", reading: "42 kg" },
    ],
  },
  {
    id: "gw3",
    label: "Gateway 3",
    tenant: "AI · EnergyInc",
    color: "#8E6FC1",
    x: 380,
    sensors: [
      { name: "Volt", reading: "230 V" },
      { name: "Power", reading: "3.2 kW" },
      { name: "Relay", reading: "ON" },
    ],
  },
];

export function IotTopologyDiagram() {
  const cseX = 230;
  const cseY = 40;
  const gwY = 150;

  return (
    <svg
      viewBox="0 18 480 250"
      role="img"
      aria-label="MMT IoT Fabric topology — one CSE, three gateways, sensors per tenant"
      className="w-full h-auto block"
    >
      <defs>
        <filter id="iot-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      <g>
        <rect x={cseX - 80} y={cseY - 18} width="160" height="44" rx="22" fill="#0B1F3A" stroke="#4A90C2" strokeWidth="1.5" />
        <text x={cseX} y={cseY + 4} textAnchor="middle" fontSize="13" fontFamily="ui-monospace, Menlo, monospace" fill="#D6E7F2">
          CSE — oneM2M Cloud
        </text>
        <text x={cseX} y={cseY + 20} textAnchor="middle" fontSize="9" fill="#F2A65A" letterSpacing="2">
          MULTI-TENANT
        </text>
      </g>

      {gateways.map((gw) => {
        const sensorY = gwY + 80;
        return (
          <g key={gw.id}>
            <line
              x1={cseX}
              y1={cseY + 26}
              x2={gw.x}
              y2={gwY - 14}
              stroke={gw.color}
              strokeOpacity="0.55"
              strokeDasharray="4 4"
              strokeWidth="1.5"
            />
            <rect
              x={gw.x - 60}
              y={gwY - 14}
              width="120"
              height="56"
              rx="10"
              fill="#1E3A5F"
              stroke={gw.color}
              strokeWidth="2"
            />
            <text x={gw.x} y={gwY + 4} textAnchor="middle" fontSize="12" fontWeight="600" fill="#ffffff">
              {gw.label}
            </text>
            <text x={gw.x} y={gwY + 22} textAnchor="middle" fontSize="9" fill={gw.color} letterSpacing="1.2">
              {gw.tenant.toUpperCase()}
            </text>

            {gw.sensors.map((s, i) => {
              const cols = gw.sensors.length;
              const cellW = 110 / cols;
              const sx = gw.x - 55 + cellW * i + cellW / 2;
              return (
                <g key={s.name}>
                  <line
                    x1={gw.x}
                    y1={gwY + 42}
                    x2={sx}
                    y2={sensorY - 14}
                    stroke={gw.color}
                    strokeOpacity="0.4"
                    strokeWidth="1"
                  />
                  <rect
                    x={sx - cellW / 2 + 2}
                    y={sensorY - 14}
                    width={cellW - 4}
                    height="44"
                    rx="6"
                    fill="#0B1F3A"
                    stroke={gw.color}
                    strokeOpacity="0.6"
                    strokeWidth="1"
                  />
                  <text x={sx} y={sensorY} textAnchor="middle" fontSize="9" fill="#D6E7F2" letterSpacing="0.5">
                    {s.name}
                  </text>
                  <text x={sx} y={sensorY + 16} textAnchor="middle" fontSize="11" fontWeight="700" fill={gw.color}>
                    {s.reading}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

    </svg>
  );
}
