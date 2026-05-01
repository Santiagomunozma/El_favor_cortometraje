import { motion } from 'framer-motion'
import rehearsalsData from '../../data/rehearsals.json'
import type { Rehearsal } from '../../types'
import { useInView } from '../../hooks/useInView'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const rehearsals = rehearsalsData as Rehearsal[]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-CO', {
    day: 'numeric', month: 'short', year: 'numeric'
  })
}

export default function Rehearsals() {
  return (
    <section id="ensayos" style={{ backgroundColor: '#0D0D0D', padding: '100px 32px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <SectionTitle
          label="Proceso creativo"
          title="Ensayos"
          description="El trabajo previo a cámara. Cada ensayo construyó las bases de las actuaciones finales."
        />

        {rehearsals.length === 0 ? (
          <p style={{
            textAlign: 'center', color: '#2C2C2C',
            fontFamily: "'Bebas Neue', sans-serif", fontSize: '24px',
          }}>
            Próximamente
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {rehearsals.map((rehearsal, index) => (
              <RehearsalCard key={rehearsal.id} rehearsal={rehearsal} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function RehearsalCard({ rehearsal, index }: { rehearsal: Rehearsal; index: number }) {
  const { ref, inView } = useInView()

  return (
    <motion.div
      ref={ref}
      onClick={() => window.open(rehearsal.videoUrl, '_blank')}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
      style={{
        backgroundColor: '#1A1A1A',
        border: '0.5px solid #2C2C2C',
        borderRadius: '12px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#C0392B')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#2C2C2C')}
    >
      <div style={{
        width: '100%', aspectRatio: '16 / 9',
        backgroundColor: '#111',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative',
      }}>
        <div style={{
          width: '52px', height: '52px', borderRadius: '50%',
          backgroundColor: 'rgba(192,57,43,0.9)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: 0, height: 0,
            borderTop: '10px solid transparent',
            borderBottom: '10px solid transparent',
            borderLeft: '18px solid #F5F0EB',
            marginLeft: '4px',
          }} />
        </div>
        <span style={{
          position: 'absolute', top: '10px', right: '10px',
          backgroundColor: 'rgba(13,13,13,0.85)',
          padding: '3px 8px', borderRadius: '4px',
          fontSize: '10px', color: '#4A4A4A', letterSpacing: '1px',
        }}>
          {formatDate(rehearsal.date)}
        </span>
      </div>
      <div style={{ padding: '18px' }}>
        <p style={{
          fontSize: '9px', letterSpacing: '2px',
          textTransform: 'uppercase', color: '#C0392B', marginBottom: '4px',
        }}>
          Ensayo {String(index + 1).padStart(2, '0')}
        </p>
        <h3 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '20px', color: '#F5F0EB', marginBottom: '8px',
        }}>
          {rehearsal.title}
        </h3>
        <p style={{ fontSize: '13px', color: '#4A4A4A', lineHeight: 1.7 }}>
          {rehearsal.description}
        </p>
      </div>
    </motion.div>
  )
}