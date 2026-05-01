import { useMemo, useState } from 'react'
import { castMembers } from '../../Data/castMembers'
import { filterCastMembers, type CastingFilter } from '../../domain/castingFilters'
import CastCard from './CastCard'
import CastingFilterBar from './CastingFilterBar'
import HorizontalCarousel from '../../components/HorizontalCarousel/HorizontalCarousel'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import { colors, layout, section } from '../../lib/designTokens'

export default function Casting() {
  const [filter, setFilter] = useState<CastingFilter>('Todos')
  const filtered = useMemo(() => filterCastMembers(castMembers, filter), [filter])

  return (
    <section id="casting" style={{ backgroundColor: colors.bgSectionMuted, padding: section.paddingY }}>
      <div style={{ maxWidth: layout.maxContent, margin: '0 auto', padding: section.contentPaddingX }}>
        <SectionTitle
          label="Proceso de selección"
          title="Casting"
          description="Más de 30 personas aplicaron para dar vida a los personajes de El Favor."
        />
        <CastingFilterBar value={filter} onChange={setFilter} />
      </div>

      <HorizontalCarousel itemMaxWidth={layout.carouselItemCast}>
        {filtered.map((member, index) => (
          <CastCard key={member.id} member={member} index={index} />
        ))}
      </HorizontalCarousel>
    </section>
  )
}
