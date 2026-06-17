import { useState } from "react";
import { motion } from "framer-motion";
import { useIsMobile } from "../../Hooks/useIsMobile";

const VIDEO_URL =
  "https://res.cloudinary.com/dzbnuvdu6/video/upload/v1781665614/Teaserelfavorfinal_oigxax.mp4";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Teaser() {
  const [played, setPlayed] = useState(false);
  const isMobile = useIsMobile();

  const handleClap = () => {
    if (!played) setPlayed(true);
  };

  return (
    <section
      id="teaser"
      style={{
        backgroundColor: "#080808",
        padding: isMobile ? "80px 24px" : "100px 32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <motion.p
        style={{
          color: "#C0392B",
          fontSize: "11px",
          letterSpacing: "4px",
          textTransform: "uppercase",
          marginBottom: "16px",
          textAlign: "center",
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
      >
        Avance oficial
      </motion.p>

      <motion.h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: isMobile ? "48px" : "72px",
          color: "#F5F0EB",
          lineHeight: 1,
          marginBottom: "48px",
          textAlign: "center",
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.15}
      >
        Teaser
      </motion.h2>

      <motion.div
        style={{ width: "100%", maxWidth: "900px" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0.3}
      >
        {/* Plaqueta superior */}
        <div
          onClick={handleClap}
          style={{
            cursor: played ? "default" : "pointer",
            overflow: "hidden",
          }}
        >
          <style>{`
            @keyframes clapAnim {
              0%   { transform: rotate(0deg); }
              30%  { transform: rotate(-22deg); }
              65%  { transform: rotate(4deg); }
              100% { transform: rotate(0deg); }
            }
            .clap-top {
              transform-origin: top center;
            }
            .clap-top.clapped {
              animation: clapAnim 0.35s ease forwards;
            }
          `}</style>

          {/* Franja diagonal */}
          <div
            className={played ? "clap-top clapped" : "clap-top"}
            style={{
              height: "56px",
              background:
                "repeating-linear-gradient(60deg, #111 0px, #111 36px, #d4d4d4 36px, #d4d4d4 72px)",
              borderTop: "2px solid #C0392B",
              borderLeft: "2px solid #C0392B",
              borderRight: "2px solid #C0392B",
            }}
          />

          {/* Datos de rodaje */}
          <div
            style={{
              backgroundColor: "#e2e8f0",
              borderLeft: "2px solid #C0392B",
              borderRight: "2px solid #C0392B",
              padding: "10px 20px",
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {[
              "PROD: EL FAVOR",
              "ROLL: 1",
              "SCENE: 1.1",
              "TAKE: 1",
              "DIR: KAREN & LAURA",
            ].map((item) => (
              <span
                key={item}
                style={{
                  fontFamily: "monospace",
                  fontWeight: "bold",
                  fontSize: isMobile ? "11px" : "13px",
                  color: "#0f172a",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Área del video — siempre visible */}
        <div
          style={{
            width: "100%",
            aspectRatio: "16 / 9",
            backgroundColor: "#000",
            border: "2px solid #C0392B",
            borderTop: "none",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {!played && (
            <div
              onClick={handleClap}
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                zIndex: 2,
                gap: "12px",
              }}
            >
              <div
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  backgroundColor: "rgba(192,57,43,0.9)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderTop: "12px solid transparent",
                    borderBottom: "12px solid transparent",
                    borderLeft: "22px solid #F5F0EB",
                    marginLeft: "4px",
                  }}
                />
              </div>
              <p
                style={{
                  color: "#4A4A4A",
                  fontSize: "11px",
                  letterSpacing: "3px",
                  textTransform: "uppercase",
                }}
              >
                Click para reproducir
              </p>
            </div>
          )}

          {played && (
            <video
              autoPlay
              controls
              style={{ width: "100%", height: "100%", display: "block" }}
            >
              <source src={VIDEO_URL} type="video/mp4" />
            </video>
          )}
        </div>
      </motion.div>
    </section>
  );
}
