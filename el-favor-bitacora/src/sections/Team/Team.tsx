import { teamMembers } from '../../Data/teamMembers'
import TeamCard from './TeamCard'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { colors, layout, section, space } from '../../lib/designTokens'

export default function Team() {
  return (
    <section id="equipo" style={{ backgroundColor: colors.bgBase, padding: section.paddingY }}>
      <div
        style={{
          maxWidth: layout.maxContent,
          margin: '0 auto',
          padding: `0 ${section.contentPaddingX}`,
        }}
      >
        <SectionTitle
          label="El equipo"
          title="Quiénes Somos"
          description="El grupo detrás de El Favor, un proyecto universitario rodado en Medellín."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: space['3xl'],
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.id} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
