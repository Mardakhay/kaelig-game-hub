import { useQuery } from '@tanstack/react-query'
import { type GameListParams } from '../model/types'
import { gameQueryKeys } from './queryKeys'
import { gameService } from './gameService'

export function useGamesQuery(params: GameListParams = {}) {
  return useQuery({
    queryKey: gameQueryKeys.list(params),
    queryFn: ({ signal }) => gameService.getGames(params, signal),
  })
}

export function useGameDetailsQuery(id: number | string) {
  return useQuery({
    queryKey: gameQueryKeys.detail(id),
    queryFn: ({ signal }) => gameService.getGameDetails(id, signal),
    enabled: Boolean(id),
  })
}
