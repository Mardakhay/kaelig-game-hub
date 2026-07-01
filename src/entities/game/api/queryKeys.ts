import { type GameListParams } from '../model/types'

export const gameQueryKeys = {
  all: ['games'] as const,
  lists: () => [...gameQueryKeys.all, 'list'] as const,
  list: (params: GameListParams = {}) => [...gameQueryKeys.lists(), params] as const,
  details: () => [...gameQueryKeys.all, 'detail'] as const,
  detail: (id: number | string) => [...gameQueryKeys.details(), String(id)] as const,
}
