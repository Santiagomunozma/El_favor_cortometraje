export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        backgroundColor: "#0D0D0D",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "96px 24px",
      }}
    >
      <style>{`
          .hero-content > * {
            animation: fadeUp 0.7s ease-out both;
          }
          .hero-content > *:nth-child(1) { animation-delay: 0s; }
          .hero-content > *:nth-child(2) { animation-delay: 0.1s; }
          .hero-content > *:nth-child(3) { animation-delay: 0.2s; }
          .hero-content > *:nth-child(4) { animation-delay: 0.35s; }
          .hero-content > *:nth-child(5) { animation-delay: 0.45s; }
          .hero-content > *:nth-child(6) { animation-delay: 0.55s; }
          .hero-content > *:nth-child(7) { animation-delay: 0.7s; }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(30px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

      <div
        className="hero-content"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "#C0392B",
            fontSize: "11px",
            letterSpacing: "4px",
            marginBottom: "16px",
          }}
        >
          DRAMA · CORTOMETRAJE
        </p>

        <div
          style={{
            width: "48px",
            height: "1px",
            backgroundColor: "#C0392B",
            marginBottom: "20px",
          }}
        />

        <h1
          style={{
            color: "#F5F0EB",
            fontSize: "clamp(72px, 15vw, 120px)",
            fontFamily: "'Bebas Neue', sans-serif",
            lineHeight: 1,
            marginBottom: "12px",
            textAlign: "center",
          }}
        >
          El Favor
        </h1>

        <p
          style={{
            color: "#B8860B",
            fontSize: "18px",
            fontStyle: "italic",
            fontFamily: "'Playfair Display', serif",
            marginBottom: "32px",
          }}
        >
          Lealtad. Culpa. Verdad.
        </p>

        <div
          style={{
            width: "1px",
            height: "40px",
            backgroundColor: "#2C2C2C",
            marginBottom: "32px",
          }}
        />

        <p
          style={{
            color: "#E8E0D5",
            fontSize: "15px",
            lineHeight: 1.8,
            textAlign: "center",
            maxWidth: "520px",
            marginBottom: "40px",
          }}
        >
          Héctor sale de prisión tras pagar por un crimen que no cometió. Su
          jefe Juan David lo somete a favores sin límite. Una noche, un
          accidente cambia todo — y la víctima resulta ser su propia hija.
        </p>

        <div style={{ display: "flex", gap: "40px" }}>
          {[
            { label: "Género", value: "Drama" },
            { label: "Formato", value: "Corto" },
            { label: "Ciudad", value: "Medellín" },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p
                style={{
                  color: "#4A4A4A",
                  fontSize: "10px",
                  letterSpacing: "2px",
                  marginBottom: "4px",
                }}
              >
                {label}
              </p>
              <p
                style={{
                  color: "#F5F0EB",
                  fontSize: "22px",
                  fontFamily: "'Bebas Neue', sans-serif",
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
