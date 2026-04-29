import type { CastMember, CastStage } from "../../Types/index";

const STAGES: { key: CastStage; label: string }[] = [
  { key: "applied", label: "Aplicó" },
  { key: "contacted", label: "Contactado" },
  { key: "video_sent", label: "Video enviado" },
  { key: "selected", label: "Seleccionado" },
];

const STAGE_INDEX: Record<CastStage, number> = {
  applied: 0,
  contacted: 1,
  video_sent: 2,
  selected: 3,
};

interface Props {
  member: CastMember;
}

export default function CastCard({ member }: Props) {
  const currentStep = STAGE_INDEX[member.stage];
  const currentLabel = STAGES[currentStep].label;

  return (
    <div
      style={{
        backgroundColor: "#1A1A1A",
        border: "0.5px solid #2C2C2C",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease",
        height: "480px",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C0392B")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2C2C2C")}
    >
      <div
        style={{
          width: "100%",
          height: "280px",
          backgroundColor: "#0D0D0D",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "48px",
              color: "#2C2C2C",
            }}
          >
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      <div
        style={{
          padding: "16px",
          overflow: "hidden",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#C0392B",
            marginBottom: "4px",
          }}
        >
          {member.role.join(", ")}
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20px",
            color: "#F5F0EB",
            marginBottom: "4px",
          }}
        >
          {member.name}
        </h3>
        <p style={{ fontSize: "11px", color: "#4A4A4A", marginBottom: "14px" }}>
          {member.email}
        </p>

        <p
          style={{
            fontSize: "9px",
            letterSpacing: "1px",
            textTransform: "uppercase",
            color: "#4A4A4A",
            marginBottom: "6px",
          }}
        >
          Progreso
        </p>
        <div style={{ display: "flex", gap: "3px", marginBottom: "4px" }}>
          {STAGES.map((stage, i) => (
            <div
              key={stage.key}
              style={{
                flex: 1,
                height: "3px",
                borderRadius: "2px",
                backgroundColor: i <= currentStep ? "#C0392B" : "#2C2C2C",
                transition: "background-color 0.3s ease",
              }}
            />
          ))}
        </div>
        <p style={{ fontSize: "9px", color: "#8B0000" }}>{currentLabel}</p>

        {member.reelUrl && (
          <a
            href={member.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "12px",
              padding: "7px",
              border: "0.5px solid #2C2C2C",
              borderRadius: "6px",
              fontSize: "10px",
              letterSpacing: "1px",
              textTransform: "uppercase",
              color: "#4A4A4A",
              textDecoration: "none",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#C0392B";
              e.currentTarget.style.color = "#C0392B";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2C2C2C";
              e.currentTarget.style.color = "#4A4A4A";
            }}
          >
            Ver reel
          </a>
        )}
      </div>
    </div>
  );
}
