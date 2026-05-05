import { CASTING_FILTER_OPTIONS, type CastingFilter } from '../../domain/castingFilters'
import { borders, colors, fontSize, letterSpacing, radius, space, transition } from '../../lib/designTokens'

export interface CastingFilterBarProps {
  value: CastingFilter
  onChange: (filter: CastingFilter) => void
}

export default function CastingFilterBar({ value, onChange }: CastingFilterBarProps) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: space.md,
        justifyContent: 'center',
        marginBottom: space['6xl'],
      }}
    >
      {CASTING_FILTER_OPTIONS.map(option => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          style={{
            padding: `${space.sm} ${space['3xl']}`,
            borderRadius: radius.pill,
            fontSize: fontSize.sm,
            letterSpacing: letterSpacing.normal,
            textTransform: 'uppercase',
            cursor: 'pointer',
            border: borders.subtle,
            borderColor: value === option ? colors.accent : colors.borderMuted,
            backgroundColor: value === option ? colors.accentAlpha08 : 'transparent',
            color: value === option ? colors.accent : colors.borderMuted,
            transition: transition.allFast,
          }}
        >
          {option}
        </button>
      ))}
    </div>
  )
}
