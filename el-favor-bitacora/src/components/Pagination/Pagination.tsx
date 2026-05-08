import type { CSSProperties } from 'react'
import {
  borders,
  colors,
  fontSize,
  letterSpacing,
  radius,
  space,
  transition,
} from '../../lib/designTokens'

export interface PaginationProps {
  page: number
  totalPages: number
  onChange: (page: number) => void
}

const containerStyle: CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: space.md,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: space['5xl'],
}

function buttonStyle(active: boolean, disabled: boolean): CSSProperties {
  return {
    minWidth: '36px',
    padding: `${space.sm} ${space.lg}`,
    borderRadius: radius.pill,
    fontSize: fontSize.sm,
    letterSpacing: letterSpacing.normal,
    textTransform: 'uppercase',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: borders.subtle,
    borderColor: active ? colors.accent : colors.borderMuted,
    backgroundColor: active ? colors.accentAlpha08 : 'transparent',
    color: active ? colors.accent : colors.borderMuted,
    opacity: disabled ? 0.4 : 1,
    transition: transition.allFast,
  }
}

/**
 * Construye una secuencia compacta de páginas con elipsis cuando hay muchas.
 * Ej.: 1 ... 4 5 6 ... 10
 */
function buildPageItems(page: number, totalPages: number): Array<number | 'ellipsis'> {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1)
  }
  const items: Array<number | 'ellipsis'> = [1]
  const start = Math.max(2, page - 1)
  const end = Math.min(totalPages - 1, page + 1)
  if (start > 2) items.push('ellipsis')
  for (let i = start; i <= end; i++) items.push(i)
  if (end < totalPages - 1) items.push('ellipsis')
  items.push(totalPages)
  return items
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  if (totalPages <= 1) return null

  const items = buildPageItems(page, totalPages)
  const canPrev = page > 1
  const canNext = page < totalPages

  return (
    <nav style={containerStyle} aria-label="Paginación">
      <button
        type="button"
        onClick={() => canPrev && onChange(page - 1)}
        disabled={!canPrev}
        aria-label="Página anterior"
        style={buttonStyle(false, !canPrev)}
      >
        ←
      </button>

      {items.map((item, idx) =>
        item === 'ellipsis' ? (
          <span
            key={`ellipsis-${idx}`}
            style={{
              color: colors.borderMuted,
              fontSize: fontSize.sm,
              padding: `0 ${space.xs}`,
            }}
          >
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-current={item === page ? 'page' : undefined}
            style={buttonStyle(item === page, false)}
          >
            {item}
          </button>
        ),
      )}

      <button
        type="button"
        onClick={() => canNext && onChange(page + 1)}
        disabled={!canNext}
        aria-label="Página siguiente"
        style={buttonStyle(false, !canNext)}
      >
        →
      </button>
    </nav>
  )
}
