import { Children, isValidElement, type CSSProperties, type ReactNode } from 'react'
import { useCarousel } from '../../Hooks/useCarousel'
import { CarouselArrowButton } from './CarouselArrowButton'
import { space } from '../../lib/designTokens'

const SCROLL_TRACK_STYLE: CSSProperties = {
  display: 'flex',
  gap: space['3xl'],
  overflowX: 'auto',
  padding: `${space.md} ${space['5xl']} ${space['4xl']}`,
  cursor: 'grab',
  scrollbarWidth: 'none',
  userSelect: 'none',
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
            <div key={child.key} style={{ flex: '0 0 85vw', maxWidth: itemMaxWidth }}>
              {child}
            </div>
          )
        })}
      </div>
    </div>
  )
}
