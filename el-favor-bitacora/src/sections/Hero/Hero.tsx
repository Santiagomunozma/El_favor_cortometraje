import { motion } from 'framer-motion'
import { useIsMobile } from '../../hooks/useIsMobile'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: 'easeOut' }
  })
}

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section id="inicio" style={{
      minHeight: '100vh',
      backgroundColor: '#0D0D0D',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '80px 24px 60px' : '96px 24px',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <motion.p
          style={{ color: '#C0392B', fontSize: '11px', letterSpacing: '4px', marginBottom: '16px', textAlign: 'center' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0}
        >
          DRAMA · CORTOMETRAJE
        </motion.p>

        <motion.div
          style={{ width: '48px', height: '1px', backgroundColor: '#C0392B', marginBottom: '20px' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.1}
        />

        <motion.h1
          style={{
            color: '#F5F0EB',
            fontSize: isMobile ? '72px' : 'clamp(72px, 15vw, 120px)',
            fontFamily: "'Bebas Neue', sans-serif",
            lineHeight: 1, marginBottom: '12px', textAlign: 'center',
          }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.2}
        >
          El Favor
        </motion.h1>

        <motion.p
          style={{
            color: '#B8860B', fontSize: isMobile ? '16px' : '18px',
            fontStyle: 'italic', fontFamily: "'Playfair Display', serif",
            marginBottom: '32px', textAlign: 'center',
          }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.35}
        >
          Lealtad. Culpa. Verdad.
        </motion.p>

        <motion.div
          style={{ width: '1px', height: '40px', backgroundColor: '#2C2C2C', marginBottom: '32px' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.45}
        />

        <motion.p
          style={{
            color: '#E8E0D5', fontSize: '15px', lineHeight: 1.8,
            textAlign: 'center', maxWidth: '520px', marginBottom: '40px',
            padding: isMobile ? '0 8px' : '0',
          }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.55}
        >
          Héctor sale de prisión tras pagar por un crimen que no cometió.
          Su jefe Juan David lo somete a favores sin límite. Una noche,
          un accidente cambia todo — y la víctima resulta ser su propia hija.
        </motion.p>

        <motion.div
          style={{ display: 'flex', gap: isMobile ? '24px' : '40px' }}
          variants={fadeUp} initial="hidden" animate="visible" custom={0.7}
        >
          {[
            { label: 'Género', value: 'Drama' },
            { label: 'Formato', value: 'Corto' },
            { label: 'Ciudad', value: 'Medellín' },
          ].map(({ label, value }) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ color: '#4A4A4A', fontSize: '10px', letterSpacing: '2px', marginBottom: '4px' }}>{label}</p>
              <p style={{ color: '#F5F0EB', fontSize: '22px', fontFamily: "'Bebas Neue', sans-serif" }}>{value}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}