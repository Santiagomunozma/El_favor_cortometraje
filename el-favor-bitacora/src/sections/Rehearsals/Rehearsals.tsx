import rehearsalsData from "../../Data/rehearsals.json";
import type { Rehearsal } from "../../Types/index";
import { useScrollReveal } from "../../Hooks/useScrollReveal";

const rehearsals = rehearsalsData as Rehearsal[];
function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("es-CO", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function Rehearsals() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();

  return (
    <section
      id="ensayos"
      style={{ backgroundColor: "#0D0D0D", padding: "100px 32px" }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          ref={titleRef}
          style={{
            textAlign: "center",
            marginBottom: "64px",
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(40px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p
            style={{
              fontSize: "11px",
              letterSpacing: "4px",
              textTransform: "uppercase",
              color: "#C0392B",
              marginBottom: "16px",
            }}
          >
            Proceso creativo
          </p>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#F5F0EB",
              lineHeight: 1,
              marginBottom: "16px",
            }}
          >
            Ensayos
          </h2>
          <p
            style={{
              fontSize: "15px",
              color: "#4A4A4A",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            El trabajo previo a cámara. Cada ensayo construyó las bases de las
            actuaciones finales.
          </p>
        </div>

        {rehearsals.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              color: "#2C2C2C",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "24px",
            }}
          >
            Próximamente
          </p>
        ) : (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {rehearsals.map((rehearsal, index) => (
              <RehearsalCard
                key={rehearsal.id}
                rehearsal={rehearsal}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function RehearsalCard({
  rehearsal,
  index,
}: {
  rehearsal: Rehearsal;
  index: number;
}) {
  return (
    <div
      onClick={() => window.open(rehearsal.videoUrl, "_blank")}
      style={{
        backgroundColor: "#1A1A1A",
        border: "0.5px solid #2C2C2C",
        borderRadius: "12px",
        overflow: "hidden",
        cursor: "pointer",
        transition: "border-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#C0392B")}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2C2C2C")}
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 9",
          backgroundColor: "#111",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "50%",
            backgroundColor: "rgba(192,57,43,0.9)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.2s ease",
          }}
        >
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "10px solid transparent",
              borderBottom: "10px solid transparent",
              borderLeft: "18px solid #F5F0EB",
              marginLeft: "4px",
            }}
          />
        </div>

        <span
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "rgba(13,13,13,0.85)",
            padding: "3px 8px",
            borderRadius: "4px",
            fontSize: "10px",
            color: "#4A4A4A",
            letterSpacing: "1px",
          }}
        >
          {formatDate(rehearsal.date)}
        </span>
      </div>

      <div style={{ padding: "18px" }}>
        <p
          style={{
            fontSize: "9px",
            letterSpacing: "2px",
            textTransform: "uppercase",
            color: "#C0392B",
            marginBottom: "4px",
          }}
        >
          Ensayo {String(index + 1).padStart(2, "0")}
        </p>
        <h3
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "20px",
            color: "#F5F0EB",
            marginBottom: "8px",
          }}
        >
          {rehearsal.title}
        </h3>
        <p style={{ fontSize: "13px", color: "#4A4A4A", lineHeight: 1.7 }}>
          {rehearsal.description}
        </p>
      </div>
    </div>
  );
}
