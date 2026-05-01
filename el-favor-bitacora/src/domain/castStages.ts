import type { CastStage } from '../Types'

/** Orden fijo del pipeline de casting (única fuente de verdad para UI y progreso). */
export const CAST_STAGE_ORDER: readonly CastStage[] = [
  'applied',
  'contacted',
  'video_sent',
  'selected',
] as const

const LABELS: Record<CastStage, string> = {
  applied: 'Aplicó',
  contacted: 'Contactado',
  video_sent: 'Video enviado',
  selected: 'Seleccionado',
}

export function castStageIndex(stage: CastStage): number {
  return CAST_STAGE_ORDER.indexOf(stage)
}

export function castStageLabel(stage: CastStage): string {
  return LABELS[stage]
}
