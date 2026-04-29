import type { TeamMember } from "../../Types/index";

interface Props {
  member: TeamMember;
}

export default function TeamCard({ member }: Props) {
  return (
    <div
      style={{
        backgroundColor: "#2C2C2C",
        border: "0.5px solid #4A4A4A",
        borderRadius: "12px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C0392B")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#4A4A4A")}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          backgroundColor: "#0D0D0D",
          overflow: "hidden",
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "48px",
              color: "#2C2C2C",
            }}
          >
            {member.name.charAt(0)}
          </div>
        )}
      </div>

      <div style={{ padding: "20px" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#C0392B",
            marginBottom: "6px",
          }}
        >
          {member.role}
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "22px",
            color: "#F5F0EB",
            marginBottom: "8px",
          }}
        >
          {member.name}
        </h3>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: "#4A4A4A",
            lineHeight: 1.7,
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}
