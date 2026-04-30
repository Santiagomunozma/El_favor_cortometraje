import { useIsMobile } from "../../Hooks/useIsMobile";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        backgroundColor: "#080808",
        borderTop: "0.5px solid #2C2C2C",
        padding: isMobile ? "40px 24px 28px" : "48px 32px 32px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-start",
            marginBottom: "40px",
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
          <div style={{ textAlign: isMobile ? "left" : "right" }}>
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
            <a
              href="mailto:elfavorcorto@gmail.com"
              style={{
                fontSize: "13px",
                color: "#C0392B",
                textDecoration: "none",
              }}
            >
              elfavorcorto@gmail.com
            </a>
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

        <div style={{ marginBottom: "32px" }}>
          <p style={{ fontSize: "11px", color: "#2C2C2C" }}>
            Desarrollo web{" "}
            <span style={{ color: "#4A4A4A" }}>Santiago Muñoz</span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
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
      </div>
    </footer>
  );
}
