import { motion } from "framer-motion";
import type { TeamMember } from "../../Types";
import {
  borders,
  colors,
  fontSize,
  fonts,
  letterSpacing,
  radius,
  space,
  transition,
} from "../../lib/designTokens";

interface Props {
  member: TeamMember;
  index: number;
}

export default function TeamCard({ member, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      style={{
        backgroundColor: colors.bgCardAlt,
        border: `${borders.subtle} ${colors.borderMuted}`,
        borderRadius: radius.lg,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: transition.border,
      }}
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = colors.accent)}
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = colors.borderMuted)
      }
    >
      <div
        style={{
          width: "100%",
          aspectRatio: "1 / 1",
          backgroundColor: colors.bgBase,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: transition.transform,
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        ) : (
          <span
            style={{
              fontFamily: fonts.heading,
              fontSize: fontSize.displaySm,
              color: colors.border,
            }}
          >
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      <div style={{ padding: space["3xl"] }}>
        <p
          style={{
            fontFamily: fonts.body,
            fontSize: fontSize.xs,
            letterSpacing: letterSpacing.normal,
            textTransform: "uppercase",
            color: colors.accent,
            marginBottom: space.sm,
          }}
        >
          {member.role}
        </p>
        <h3
          style={{
            fontFamily: fonts.heading,
            fontSize: fontSize["4xl"],
            color: colors.textPrimary,
            marginBottom: space.md,
          }}
        >
          {member.name}
        </h3>
      </div>
    </motion.div>
  );
}
