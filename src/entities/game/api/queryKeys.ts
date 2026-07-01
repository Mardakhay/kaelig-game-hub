import { type GameListParams } from '../model/types'

export const gameQueryKeys = {
  all: ['games'] as const,
  lists: () => [...gameQueryKeys.all, 'list'] as const,
  list: (params: GameListParams = {}) => [...gameQueryKeys.lists(), params] as const,
  infiniteLists: () => [...gameQueryKeys.all, 'infinite-list'] as const,
  infiniteList: (params: GameListParams = {}) =>
    [...gameQueryKeys.infiniteLists(), params] as const,
  details: () => [...gameQueryKeys.all, 'detail'] as const,
  detail: (id: number | string) => [...gameQueryKeys.details(), String(id)] as const,
  resources: (id: number | string) => [...gameQueryKeys.detail(id), 'resource'] as const,
  screenshots: (id: number | string) => [...gameQueryKeys.resources(id), 'screenshots'] as const,
  movies: (id: number | string) => [...gameQueryKeys.resources(id), 'movies'] as const,
}
