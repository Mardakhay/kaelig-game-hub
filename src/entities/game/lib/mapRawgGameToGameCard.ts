import { type GameCardGame } from '../ui/GameCard'
import { type RawgGame } from '../model/types'

const fallbackImage = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80'

export function mapRawgGameToGameCard(game: RawgGame): GameCardGame {
  const releaseYear = game.released ? new Date(game.released).getFullYear() : new Date().getFullYear()
  const platforms = game.parent_platforms?.map(({ platform }) => platform.name) ?? []

  return {
    id: game.id,
    title: game.name,
    image: game.background_image ?? game.short_screenshots?.[0]?.image ?? fallbackImage,
    rating: game.rating,
    releaseYear,
    platforms: platforms.length > 0 ? platforms : ['Unknown'],
    genres: game.genres.map(genre => genre.name),
  }
}
