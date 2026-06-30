import { useParams } from '@tanstack/react-router'

export function GamePage() {
  const { id } = useParams({ from: '/game/$id' })

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Game {id}</h1>
    </div>
  )
}
