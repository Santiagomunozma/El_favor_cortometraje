import teamData from '../../data/team.json'
import type { TeamMember } from '../../types'
import TeamCard from './TeamCard'
import { useCarousel } from '../../hooks/useCarousel'
import SectionTitle from '../../components/SectionTitle/SectionTitle'

const team = teamData as TeamMember[]

export default function Team() {
  const { ref, canScrollLeft, canScrollRight, updateArrows, scrollTo, dragHandlers } = useCarousel()

  return (
    <section id="equipo" style={{ backgroundColor: '#0D0D0D', padding: '100px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 32px' }}>
        <SectionTitle
          label="El equipo"
          title="Quiénes Somos"
          description="El grupo detrás de El Favor, un proyecto universitario rodado en Medellín."
        />
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
          {team.map(member => (
            <div key={member.id} style={{ flex: '0 0 85vw', maxWidth: '280px' }}>
              <TeamCard member={member} />
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