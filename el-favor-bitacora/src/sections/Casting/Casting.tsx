import { useEffect, useMemo, useState } from 'react'
import { castMembers } from '../../Data/castMembers'
import { filterCastMembers, type CastingFilter } from '../../domain/castingFilters'
import CastCard from './CastCard'
import CastingFilterBar from './CastingFilterBar'
import Pagination from '../../components/Pagination/Pagination'
import SectionTitle from '../../components/SectionTitle/SectionTitle'
import {
  colors,
  fontSize,
  letterSpacing,
  layout,
  radius,
  section,
  space,
} from '../../lib/designTokens'

const PAGE_SIZE = 4

export default function Casting() {
  const [filter, setFilter] = useState<CastingFilter>('Todos')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => filterCastMembers(castMembers, filter), [filter])

  const selected = useMemo(
    () => castMembers.filter(m => m.stage === 'selected'),
    [],
  )

  const visible = useMemo(
    () => filtered.filter(m => m.stage !== 'selected'),
    [filtered],
  )

  const totalPages = Math.max(1, Math.ceil(visible.length / PAGE_SIZE))
  const slice = visible.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  useEffect(() => {
    setPage(1)
  }, [filter])

  return (
    <section id="casting" style={{ backgroundColor: colors.bgSectionMuted, padding: section.paddingY }}>
      <div
        style={{
          maxWidth: layout.maxContent,
          margin: '0 auto',
          padding: `0 ${section.contentPaddingX}`,
        }}
      >
        <SectionTitle
          label="Proceso de selección"
          title="Casting"
          description="Más de 30 personas aplicaron para dar vida a los personajes de El Favor."
        />

        {selected.length > 0 && (
          <div style={{ marginBottom: space['7xl'] }}>
            <p
              style={{
                fontSize: fontSize.xs,
                letterSpacing: letterSpacing.wide,
                textTransform: 'uppercase',
                color: colors.accent,
                textAlign: 'center',
                marginBottom: space['3xl'],
              }}
            >
              Selección final
            </p>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: space['4xl'],
                maxWidth: '720px',
                margin: '0 auto',
              }}
            >
              {selected.map((member, index) => (
                <div
                  key={member.id}
                  style={{
                    border: `1px solid ${colors.accent}`,
                    borderRadius: radius.lg,
                    padding: space.xs,
                    boxShadow: `0 0 0 1px ${colors.accentAlpha08}`,
                  }}
                >
                  <CastCard member={member} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}

        <CastingFilterBar value={filter} onChange={setFilter} />

        {visible.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: colors.textMuted,
              fontSize: fontSize.base,
              padding: `${space['5xl']} 0`,
            }}
          >
            No hay aspirantes para este filtro.
          </p>
        ) : (
          <>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: space['3xl'],
              }}
            >
              {slice.map((member, index) => (
                <CastCard key={member.id} member={member} index={index} />
              ))}
            </div>

            <Pagination page={page} totalPages={totalPages} onChange={setPage} />
          </>
        )}
      </div>
    </section>
  )
}
