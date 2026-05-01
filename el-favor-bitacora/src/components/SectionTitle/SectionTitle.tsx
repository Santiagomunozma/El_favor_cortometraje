import { motion } from 'framer-motion'
import { useInView } from '../../hooks/useInView'

interface Props {
  label: string
  title: string
  description?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' }
  })
}

export default function SectionTitle({ label, title, description }: Props) {
  const { ref, inView } = useInView()

  return (
    <div ref={ref} style={{ textAlign: 'center', marginBottom: '64px' }}>
      <motion.p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px', letterSpacing: '4px',
          textTransform: 'uppercase', color: '#C0392B', marginBottom: '16px',
        }}
        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0}
      >
        {label}
      </motion.p>

      <motion.h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(40px, 6vw, 72px)',
          color: '#F5F0EB', lineHeight: 1, marginBottom: '16px',
        }}
        variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.15}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '15px', color: '#4A4A4A',
            maxWidth: '480px', margin: '0 auto', lineHeight: 1.7,
          }}
          variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'} custom={0.3}
        >
          {description}
        </motion.p>
      )}
    </div>
  )
}