import type { CastMember, CastRole } from '../Types'

export type CastingFilter = 'Todos' | CastRole

export const CASTING_FILTER_OPTIONS: CastingFilter[] = ['Todos', 'Juan David', 'Héctor']

export function filterCastMembers(members: CastMember[], filter: CastingFilter): CastMember[] {
  if (filter === 'Todos') return members
  return members.filter(m => m.role.includes(filter))
}
