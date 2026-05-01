import { borders, colors, fontSize, size, space, transition } from '../../lib/designTokens'

export interface CarouselArrowButtonProps {
  direction: 'left' | 'right'
  onClick: () => void
  visible: boolean
}

export function CarouselArrowButton({ direction, onClick, visible }: CarouselArrowButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        [direction]: space.md,
        zIndex: 10,
        width: size.carouselArrow,
        height: size.carouselArrow,
        borderRadius: '50%',
        backgroundColor: colors.overlayButton,
        border: `${borders.subtle} ${colors.border}`,
        color: colors.textPrimary,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: fontSize.xl,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: transition.opacityBorder,
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = colors.accent)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = colors.border)}
    >
      {direction === 'left' ? '←' : '→'}
    </button>
  )
}
