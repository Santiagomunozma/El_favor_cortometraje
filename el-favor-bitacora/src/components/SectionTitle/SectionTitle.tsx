import { motion } from 'framer-motion'
import { useInView } from '../../Hooks/useInView'
import { colors, fontSize, fonts, layout, letterSpacing, lineHeight, space } from '../../lib/designTokens'

interface Props {
  label: string
  title: string
  description?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' as const }
  })
}

export default function SectionTitle({ label, title, description }: Props) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} style={{ textAlign: 'center', marginBottom: space['8xl'] }}>
      <motion.p
        style={{
          fontFamily: fonts.body,
          fontSize: fontSize.sm,
          letterSpacing: letterSpacing.wide,
          textTransform: 'uppercase',
          color: colors.accent,
          marginBottom: space.xl,
        }}
        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
      >
        {label}
      </motion.p>

      <motion.h2
        style={{
          fontFamily: fonts.heading,
          fontSize: fontSize.sectionTitle,
          color: colors.textPrimary,
          lineHeight: lineHeight.none,
          marginBottom: space.xl,
        }}
        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          style={{
            fontFamily: fonts.body,
            fontSize: fontSize.lg,
            color: colors.textMuted,
            maxWidth: layout.sectionDescMax,
            margin: '0 auto',
            lineHeight: lineHeight.snug,
          }}
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}
