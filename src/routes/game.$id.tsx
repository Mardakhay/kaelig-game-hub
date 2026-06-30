import { createFileRoute } from '@tanstack/react-router'
import { GamePage } from '@pages/game'

export const Route = createFileRoute('/game/$id')({
  component: GamePage,
})
