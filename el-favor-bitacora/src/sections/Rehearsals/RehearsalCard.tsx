import { motion } from 'framer-motion'
import type { Rehearsal } from '../../Types'
import { useInView } from '../../Hooks/useInView'
import { formatShortDateCo } from '../../lib/formatDate'
import { borders, colors, fontSize, fonts, letterSpacing, lineHeight, radius, size, space } from '../../lib/designTokens'

export interface RehearsalCardProps {
  rehearsal: Rehearsal
  index: number
}

export default function RehearsalCard({ rehearsal, index }: RehearsalCardProps) {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      onClick={() => window.open(rehearsal.videoUrl, '_blank')}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        backgroundColor: colors.bgCard,
        border: `${borders.subtle} ${colors.border}`,
        borderRadius: radius.lg,
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = colors.accent)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = colors.border)}
    >
      <div style={{
        width: '100%',
        aspectRatio: '16 / 9',
        backgroundColor: colors.bgInset,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: size.playButton,
          height: size.playButton,
          borderRadius: radius.full,
          backgroundColor: colors.accentAlpha90,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            width: 0,
            height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: `18px solid ${colors.textPrimary}`,
            marginLeft: space.xs,
          }} />
        </div>
        <span style={{
          position: 'absolute',
          top: space.cardInset,
          right: space.cardInset,
          backgroundColor: colors.overlayDark,
          padding: `${space.xxs} ${space.md}`,
          borderRadius: radius.sm,
          fontSize: fontSize.xs,
          color: colors.textMuted,
          letterSpacing: letterSpacing.tight,
        }}>
          {formatShortDateCo(rehearsal.date)}
        </span>
      </div>
      <div style={{ padding: space['2xl'] }}>
        <p style={{
          fontSize: fontSize.xxs,
          letterSpacing: letterSpacing.normal,
          textTransform: 'uppercase',
          color: colors.accent,
          marginBottom: space.xs,
        }}>
          Ensayo {String(index + 1).padStart(2, '0')}
        </p>
        <h3 style={{
          fontFamily: fonts.heading,
          fontSize: fontSize['3xl'],
          color: colors.textPrimary,
          marginBottom: space.md,
        }}>
          {rehearsal.title}
        </h3>
        <p style={{ fontSize: fontSize.base, color: colors.textMuted, lineHeight: lineHeight.snug }}>
          {rehearsal.description}
        </p>
      </div>
    </motion.div>
  )
}
