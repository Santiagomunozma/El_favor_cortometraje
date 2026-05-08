import { useIsMobile } from "../../Hooks/useIsMobile";
import {
  borders,
  colors,
  fontSize,
  fonts,
  layout,
  letterSpacing,
  space,
} from "../../lib/designTokens";

const UNIVERSITY_SHIELD_URL =
  "https://res.cloudinary.com/dzbnuvdu6/image/upload/v1778252052/Escudo_Politecnico_gv81u3.png";
const UNIVERSITY_NAME = "Politécnico Colombiano Jaime Isaza Cadavid";

export default function Footer() {
  const isMobile = useIsMobile();

  return (
    <footer
      style={{
        backgroundColor: colors.bgFooter,
        borderTop: `${borders.subtle} ${colors.border}`,
        padding: isMobile
          ? `${space["6xl"]} ${space["4xl"]} 28px`
          : `${space["7xl"]} ${space["5xl"]} ${space["5xl"]}`,
        fontFamily: fonts.body,
      }}
    >
      <div style={{ maxWidth: layout.maxContent, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "flex-start",
            marginBottom: space["6xl"],
            gap: space["4xl"],
          }}
        >
          <div>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: fontSize["6xl"],
                color: colors.textPrimary,
                letterSpacing: letterSpacing.normal,
              }}
            >
              El <span style={{ color: colors.accent }}>Favor</span>
            </p>
            <p
              style={{
                fontSize: fontSize.md,
                color: colors.textMuted,
                marginTop: space.xs,
              }}
            >
              Lealtad. Culpa. Verdad.
            </p>
          </div>
          {UNIVERSITY_SHIELD_URL && (
            <div
              style={{
                alignSelf: isMobile ? "flex-start" : "center",
                backgroundColor: "rgba(245, 240, 235, 0.94)",
                borderRadius: "8px",
                padding: "4px 8px",
                border: `${borders.subtle} ${colors.border}`,
              }}
            >
              <img
                src={UNIVERSITY_SHIELD_URL}
                alt={`Escudo ${UNIVERSITY_NAME}`}
                style={{
                  height: "56px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </div>
          )}
          <div style={{ textAlign: isMobile ? "left" : "right" }}>
            <p
              style={{
                fontSize: fontSize.xxs,
                letterSpacing: letterSpacing.normal,
                textTransform: "uppercase",
                color: colors.textMuted,
                marginBottom: space.sm,
              }}
            >
              Contacto
            </p>
            <a
              href="mailto:elfavorcorto@gmail.com"
              style={{
                fontSize: fontSize.base,
                color: colors.accent,
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
            backgroundColor: colors.border,
            marginBottom: space["4xl"],
          }}
        />

        <div style={{ marginBottom: space["5xl"] }}>
          <p style={{ fontSize: fontSize.sm, color: colors.border }}>
            Desarrollo web{" "}
            <span style={{ color: colors.textMuted }}>Santiago Macchi</span>
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "flex-start" : "center",
            gap: space.md,
          }}
        >
          <p style={{ fontSize: fontSize.sm, color: colors.border }}>
            © 2026 El Favor. Todos los derechos reservados.
          </p>
          <p style={{ fontSize: fontSize.sm, color: colors.border }}>
            Proyecto universitario · Medellín, Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
