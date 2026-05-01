import { useState } from 'react'
import castData from '../../data/cast.json'
import type { CastMember } from '../../types/index'
import CastCard from './CastCard'
import { useCarousel } from '../../hooks/useCarousel'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const cast = castData as CastMember[]
type Filter = 'Todos' | 'Juan David' | 'Héctor'

export default function Casting() {
  const [filter, setFilter] = useState<Filter>('Todos')
  const { ref, canScrollLeft, canScrollRight, updateArrows, scrollTo, dragHandlers } = useCarousel()

  const filtered = filter === 'Todos'
    ? cast
    : cast.filter(m => m.role.includes(filter))

  return (
    <section id="casting" style={{ backgroundColor: '#111111', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <SectionTitle
          label="Proceso de selección"
          title="Casting"
          description="Más de 30 personas aplicaron para dar vida a los personajes de El Favor."
        />

        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center', marginBottom: '40px' }}>
          {(['Todos', 'Juan David', 'Héctor'] as Filter[]).map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: '6px 20px', borderRadius: '20px',
                fontSize: '11px', letterSpacing: '2px',
                textTransform: 'uppercase', cursor: 'pointer',
                border: '0.5px solid',
                borderColor: filter === f ? '#C0392B' : '#4A4A4A',
                backgroundColor: filter === f ? 'rgba(192,57,43,0.08)' : 'transparent',
                color: filter === f ? '#C0392B' : '#4A4A4A',
                transition: 'all 0.2s ease',
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ position: 'relative' }}>
        <ArrowButton direction="left" onClick={() => scrollTo('left')} visible={canScrollLeft} />
        <ArrowButton direction="right" onClick={() => scrollTo('right')} visible={canScrollRight} />

        <div
          ref={ref}
          onScroll={updateArrows}
          {...dragHandlers}
          style={{
            display: 'flex',
            gap: '20px',
            overflowX: 'auto',
            padding: '8px 32px 24px',
            cursor: 'grab',
            scrollbarWidth: 'none',
            userSelect: 'none',
          }}
        >
          {filtered.map(member => (
            <div key={member.id} style={{ flex: '0 0 85vw', maxWidth: '200px' }}>
              <CastCard member={member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArrowButton({ direction, onClick, visible }: {
  direction: 'left' | 'right'
  onClick: () => void
  visible: boolean
}) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction]: '8px',
        zIndex: 10,
        width: '40px', height: '40px',
        borderRadius: '50%',
        backgroundColor: 'rgba(13,13,13,0.9)',
        border: '0.5px solid #2C2C2C',
        color: '#F5F0EB',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '16px',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.2s ease, border-color 0.2s ease',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = '#C0392B')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = '#2C2C2C')}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  )
}