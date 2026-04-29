export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "0.5px solid #2C2C2C",
        padding: "48px 32px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "24px",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "32px",
                color: "#F5F0EB",
                letterSpacing: "2px",
              }}
            >
              El <span style={{ color: "#C0392B" }}>Favor</span>
            </p>
            <p style={{ fontSize: "12px", color: "#4A4A4A", marginTop: "4px" }}>
              Lealtad. Culpa. Verdad.
            </p>
          </div>

          <div style={{ textAlign: "right" }}>
            <p
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#4A4A4A",
                marginBottom: "6px",
              }}
            >
              Contacto
            </p>

            <div
              style={{
                fontSize: "13px",
                color: "#C0392B",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#8B0000")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#C0392B")}
            >
              elfavorcortometraje@gmail.com
            </div>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "0.5px",
            backgroundColor: "#2C2C2C",
            marginBottom: "24px",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          <p style={{ fontSize: "11px", color: "#2C2C2C" }}>
            © 2026 El Favor. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: "11px", color: "#2C2C2C" }}>
            Proyecto universitario · Medellín, Colombia
          </p>
        </div>

        <p
          style={{
            marginTop: "10px",
            textAlign: "right",
            fontSize: "10px",
            color: "#1F1F1F",
            letterSpacing: "0.4px",
          }}
        >
          Desarrollador web:{" "}
          <span style={{ color: "#333333" }}>Santiago Macchi</span>
        </p>
      </div>
    </footer>
  );
}
