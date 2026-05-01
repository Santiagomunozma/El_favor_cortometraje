import { rehearsalsList } from '../../Data/rehearsalsList'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import RehearsalCard from './RehearsalCard'
import { colors, fontSize, fonts, layout, space } from '../../lib/designTokens'

export default function Rehearsals() {
  return (
    <section id="ensayos" style={{ backgroundColor: colors.bgBase, padding: `${space['11xl']} ${space['5xl']}` }}>
      <div style={{ maxWidth: layout.maxContent, margin: '0 auto' }}>
        <SectionTitle
          label="Proceso creativo"
          title="Ensayos"
          description="El trabajo previo a cámara. Cada ensayo construyó las bases de las actuaciones finales."
        />

        {rehearsalsList.length === 0 ? (
          <p style={{
            textAlign: 'center',
            color: colors.border,
            fontFamily: fonts.heading,
            fontSize: fontSize['5xl'],
          }}>
            Próximamente
          </p>
        ) : (
          <div style={{
            display: 'grid',
            gridTemplateColumns: `repeat(auto-fill, minmax(${layout.gridMinCard}, 1fr))`,
            gap: space['4xl'],
          }}>
            {rehearsalsList.map((rehearsal, index) => (
              <RehearsalCard key={rehearsal.id} rehearsal={rehearsal} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
