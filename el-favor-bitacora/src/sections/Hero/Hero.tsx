import { motion } from "framer-motion";
import { useIsMobile } from "../../Hooks/useIsMobile";
import {
  colors,
  fontSize,
  fonts,
  layout,
  letterSpacing,
  lineHeight,
  size,
  space,
} from "../../lib/designTokens";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const isMobile = useIsMobile();

  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        backgroundColor: colors.bgBase,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: isMobile
          ? `${space["9xl"]} ${space["4xl"]} 60px`
          : `${space["10xl"]} ${space["4xl"]}`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <motion.p
          style={{
            color: colors.accent,
            fontSize: fontSize.sm,
            letterSpacing: letterSpacing.wide,
            marginBottom: space.xl,
            textAlign: "center",
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
        >
          DRAMA · CORTOMETRAJE
        </motion.p>

        <motion.div
          style={{
            width: size.dividerAccentW,
            height: size.dividerAccentH,
            backgroundColor: colors.accent,
            marginBottom: space["3xl"],
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        />

        <motion.h1
          style={{
            color: colors.textPrimary,
            fontSize: isMobile ? fontSize.heroTitleMobile : fontSize.heroTitle,
            fontFamily: fonts.heading,
            lineHeight: lineHeight.none,
            marginBottom: space.lg,
            textAlign: "center",
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          El Favor
        </motion.h1>

        <motion.p
          style={{
            color: colors.highlight,
            fontSize: isMobile ? fontSize.xl : fontSize["2xl"],
            fontStyle: "italic",
            fontFamily: fonts.serif,
            marginBottom: space["5xl"],
            textAlign: "center",
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.35}
        >
          Lealtad. Culpa. Verdad.
        </motion.p>

        <motion.div
          style={{
            width: size.dividerVerticalW,
            height: size.dividerVerticalH,
            backgroundColor: colors.border,
            marginBottom: space["5xl"],
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.45}
        />

        <motion.p
          style={{
            color: colors.light,
            fontSize: fontSize.lg,
            lineHeight: lineHeight.relaxed,
            textAlign: "center",
            maxWidth: layout.heroTextMax,
            marginBottom: space["6xl"],
            padding: isMobile ? `0 ${space.md}` : "0",
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.55}
        >
          Héctor sale de prisión tras pagar por un crimen que no cometió. Su
          jefe Juan David lo somete a favores sin límite. Una noche, un
          accidente cambia todo.
        </motion.p>

        <motion.div
          style={{
            display: "flex",
            gap: isMobile ? space["4xl"] : space["6xl"],
          }}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.7}
        >
          {[
            { label: "Género", value: "Drama" },
            { label: "Formato", value: "Corto" },
            { label: "Ciudad", value: "Medellín" },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <p
                style={{
                  color: colors.textMuted,
                  fontSize: fontSize.xs,
                  letterSpacing: letterSpacing.normal,
                  marginBottom: space.xs,
                }}
              >
                {label}
              </p>
              <p
                style={{
                  color: colors.textPrimary,
                  fontSize: fontSize["4xl"],
                  fontFamily: fonts.heading,
                }}
              >
                {value}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
