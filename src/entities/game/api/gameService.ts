import { rawgRequest } from '@shared/api'
import {
  type GameListParams,
  type RawgGame,
  type RawgGameDetails,
  type RawgGameMovie,
  type RawgGameScreenshot,
  type RawgPaginatedResponse,
} from '../model/types'

export const gameService = {
  getGames(params: GameListParams = {}, signal?: AbortSignal) {
    return rawgRequest<RawgPaginatedResponse<RawgGame>>('/games', params, signal)
  },

  getGameDetails(id: number | string, signal?: AbortSignal) {
    return rawgRequest<RawgGameDetails>(`/games/${id}`, undefined, signal)
  },

  getGameScreenshots(id: number | string, signal?: AbortSignal) {
    return rawgRequest<RawgPaginatedResponse<RawgGameScreenshot>>(
      `/games/${id}/screenshots`,
      undefined,
      signal
    )
  },

  getGameMovies(id: number | string, signal?: AbortSignal) {
    return rawgRequest<{ results: RawgGameMovie[] }>(`/games/${id}/movies`, undefined, signal)
  },
}
