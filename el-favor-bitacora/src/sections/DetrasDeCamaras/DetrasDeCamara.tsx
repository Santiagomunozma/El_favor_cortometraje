import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useIsMobile } from "../../Hooks/useIsMobile";
// Asegúrate de que esta ruta apunte correctamente a tu archivo mediaData.ts
import { projectMedia } from "../../Data/mediaData";
import {
  colors,
  fontSize,
  fonts,
  lineHeight,
  space,
} from "../../lib/designTokens";

// Variante de animación suave
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function FotoFijaSection() {
  const isMobile = useIsMobile();
  const [currentIndex, setCurrentIndex] = useState(0);

  // NUEVO: Referencia para el contenedor de las miniaturas
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  // NUEVO: Efecto para auto-scrollear la miniatura activa al centro
  useEffect(() => {
    if (thumbnailsRef.current) {
      const container = thumbnailsRef.current;
      const activeThumbnail = container.children[currentIndex] as HTMLElement;

      if (activeThumbnail) {
        // Calculamos la posición para dejar la miniatura justo en el medio
        const scrollPosition =
          activeThumbnail.offsetLeft -
          container.offsetWidth / 2 +
          activeThumbnail.offsetWidth / 2;

        // Hacemos que el contenedor haga un scroll suave hasta esa posición
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        });
      }
    }
  }, [currentIndex]); // Se ejecuta cada vez que cambia la foto

  // Safe-guard por si no hay datos
  if (!projectMedia || projectMedia.length === 0) {
    return (
      <div
        style={{ color: "white", padding: space["4xl"], textAlign: "center" }}
      >
        Cargando bitácora de producción...
      </div>
    );
  }

  const currentItem = projectMedia[currentIndex];

  // Funciones de navegación con bucle infinito
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projectMedia.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + projectMedia.length) % projectMedia.length,
    );
  };

  return (
    <section
      id="foto-fija"
      style={{
        backgroundColor: colors.bgBase,
        padding: isMobile
          ? `${space["9xl"]} ${space.md}`
          : `${space["10xl"]} ${space["4xl"]}`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ENCABEZADO ESTILO PELÍCULA */}
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          marginBottom: space["4xl"],
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0}
      >
        <h2
          style={{
            color: colors.textPrimary,
            fontSize: isMobile ? fontSize["3xl"] : fontSize["5xl"],
            fontFamily: fonts.heading,
            letterSpacing: "4px",
            lineHeight: lineHeight.none,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          BITÁCORA <span style={{ color: colors.accent }}>|</span> DETRÁS DE
          CÁMARA
        </h2>
      </motion.div>

      {/* CONTENEDOR PRINCIPAL */}
      <motion.div
        style={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          flexDirection: "column",
          gap: space.md,
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        custom={0.2}
      >
        {/* VISOR PRINCIPAL CON EFECTOS */}
        <div
          style={{
            width: "100%",
            aspectRatio: isMobile ? "4 / 3" : "16 / 9",
            backgroundColor: "#000",
            position: "relative",
            border: `2px solid ${colors.accent}`,
            borderRadius: 0,
            overflow: "hidden",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentItem.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ width: "100%", height: "100%" }}
            >
              <img
                src={currentItem.url}
                alt={`Bitácora Visual - ${currentIndex + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </AnimatePresence>

          {/* FLECHAS DE NAVEGACIÓN */}
          <button
            onClick={handlePrev}
            style={{
              position: "absolute",
              top: "50%",
              left: space.sm,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: `1px solid ${colors.accent}`,
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "1.5rem",
              zIndex: 10,
            }}
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            style={{
              position: "absolute",
              top: "50%",
              right: space.sm,
              transform: "translateY(-50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              border: `1px solid ${colors.accent}`,
              padding: "10px 15px",
              cursor: "pointer",
              fontSize: "1.5rem",
              zIndex: 10,
            }}
          >
            ❯
          </button>

          {/* CONTADOR TIPO "REC" CÁMARA */}
          <div
            style={{
              position: "absolute",
              bottom: space.md,
              right: space.md,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "4px 12px",
              fontFamily: "monospace",
              fontSize: fontSize.sm,
              fontWeight: "bold",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              zIndex: 10,
            }}
          >
            <span
              style={{ color: colors.accent, animation: "blink 1.5s infinite" }}
            >
              REC:
            </span>{" "}
            <span style={{ color: "#F5F0EB" }}>{currentIndex + 1}</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.5)" }}>//</span>{" "}
            <span style={{ color: "#F5F0EB" }}>{projectMedia.length}</span>
          </div>
        </div>

        {/* TIRA DE MINIATURAS (Thumbnails) */}
        <div
          ref={thumbnailsRef} // NUEVO: Conectamos la referencia aquí
          style={{
            display: "flex",
            gap: space.sm,
            overflowX: "auto",
            paddingBottom: space.sm,
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            scrollBehavior: "smooth", // Asegura que el scroll manual también sea suave
          }}
        >
          {projectMedia.map((item, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                style={{
                  flex: "0 0 auto",
                  position: "relative",
                  width: isMobile ? "90px" : "140px",
                  aspectRatio: "16 / 9",
                  cursor: "pointer",
                  backgroundColor: "#000",
                  border: isActive
                    ? `2px solid ${colors.accent}`
                    : `2px solid transparent`,
                  opacity: isActive ? 1 : 0.5,
                  transition: "all 0.3s ease",
                }}
              >
                <img
                  src={item.url}
                  alt={`Miniatura ${index + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
