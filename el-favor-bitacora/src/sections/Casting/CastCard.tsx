import { motion } from 'framer-motion'
import type { CastMember } from '../../Types'
import { CAST_STAGE_ORDER, castStageIndex, castStageLabel } from '../../domain/castStages'
import { borders, colors, fontSize, fonts, letterSpacing, radius, size, space, transition } from '../../lib/designTokens'

interface Props {
  member: CastMember
  index: number
}

export default function CastCard({ member, index }: Props) {
  const currentStep = castStageIndex(member.stage)
  const currentLabel = castStageLabel(member.stage)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
      style={{
        backgroundColor: colors.bgCard,
        border: `${borders.subtle} ${colors.border}`,
        borderRadius: radius.lg,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: size.castCardHeight,
        transition: transition.border,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = colors.accent)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = colors.border)}
    >
      <div style={{
        width: '100%', height: size.castPhotoHeight,
        backgroundColor: colors.bgBase, overflow: 'hidden',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            style={{
              width: '100%', height: '100%', objectFit: 'cover',
              transition: transition.transform,
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          />
        ) : (
          <span style={{
            fontFamily: fonts.heading,
            fontSize: fontSize.displaySm, color: colors.border,
          }}>
            {member.name.charAt(0)}
          </span>
        )}
      </div>

      <div style={{ padding: space.xl, overflow: 'hidden', flex: 1 }}>
        <p style={{
          fontSize: fontSize.xxs, letterSpacing: letterSpacing.normal,
          textTransform: 'uppercase', color: colors.accent, marginBottom: space.xs,
        }}>
          {member.role.join(' · ')}
        </p>
        <h3 style={{
          fontFamily: fonts.heading,
          fontSize: fontSize['3xl'], color: colors.textPrimary, marginBottom: space.xs,
        }}>
          {member.name}
        </h3>
        <p style={{ fontSize: fontSize.sm, color: colors.textMuted, marginBottom: space.copyMd }}>
          {member.email}
        </p>

        <p style={{
          fontSize: fontSize.xxs, letterSpacing: letterSpacing.tight,
          textTransform: 'uppercase', color: colors.textMuted, marginBottom: space.sm,
        }}>
          Progreso
        </p>
        <div style={{ display: 'flex', gap: space.xxs, marginBottom: space.xs }}>
          {CAST_STAGE_ORDER.map((stageKey, i) => (
            <div key={stageKey} style={{
              flex: 1, height: size.progressBarH, borderRadius: radius.xs,
              backgroundColor: i <= currentStep ? colors.accent : colors.border,
              transition: transition.background,
            }} />
          ))}
        </div>
        <p style={{ fontSize: fontSize.xxs, color: colors.accentDark }}>{currentLabel}</p>

        {member.reelUrl && (
          <a
            href={member.reelUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'block', textAlign: 'center',
              marginTop: space.lg, padding: space.reelPadY,
              border: `${borders.subtle} ${colors.border}`, borderRadius: radius.md,
              fontSize: fontSize.xs, letterSpacing: letterSpacing.tight,
              textTransform: 'uppercase', color: colors.textMuted,
              textDecoration: 'none', transition: transition.reelLink,
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = colors.accent
              e.currentTarget.style.color = colors.accent
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = colors.border
              e.currentTarget.style.color = colors.textMuted
            }}
          >
            Ver reel
          </a>
        )}
      </div>
    </motion.div>
  )
}
