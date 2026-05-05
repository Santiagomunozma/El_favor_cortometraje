import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react'
import { useCarousel } from '../../Hooks/useCarousel'
import { CarouselArrowButton } from './CarouselArrowButton'
import { space } from '../../lib/designTokens'

const SCROLL_TRACK_STYLE: CSSProperties = {
  display: 'flex',
  gap: space['3xl'],
  overflowX: 'auto',
  overflowY: 'hidden',
  padding: `${space.md} clamp(12px, 4vw, 32px) ${space['4xl']}`,
  cursor: 'grab',
  scrollbarWidth: 'none',
  userSelect: 'none',
  WebkitOverflowScrolling: 'touch',
}

export interface HorizontalCarouselProps {
  /** Ancho máximo de cada ítem (ej. tarjeta) dentro del carrusel. */
  itemMaxWidth: string
  children: ReactNode
}

/**
 * Carrusel horizontal con flechas y arrastre; la sección solo provee hijos (apertura cerrada).
 */
export default function HorizontalCarousel({ itemMaxWidth, children }: HorizontalCarouselProps) {
  const { ref, canScrollLeft, canScrollRight, updateArrows, scrollTo, dragHandlers } = useCarousel()

  return (
    <div style={{ position: 'relative' }}>
      <CarouselArrowButton direction="left" onClick={() => scrollTo('left')} visible={canScrollLeft} />
      <CarouselArrowButton direction="right" onClick={() => scrollTo('right')} visible={canScrollRight} />

      <div ref={ref} onScroll={updateArrows} {...dragHandlers} style={SCROLL_TRACK_STYLE}>
        {Children.map(children, child => {
          if (!isValidElement(child)) return child
          return (
            <div
              key={child.key}
              style={{ flex: '0 0 auto', width: itemMaxWidth, flexShrink: 0 }}
            >
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )
}
