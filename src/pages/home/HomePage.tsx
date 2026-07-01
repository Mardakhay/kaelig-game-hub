import { ArrowRight, Clock, Flame, Sparkles, Trophy } from 'lucide-react'
import { GameCard, type GameCardGame } from '@entities/game'

interface GameSection {
  title: string
  subtitle: string
  icon: typeof Flame
  games: GameCardGame[]
}

const games: GameCardGame[] = [
  {
    id: 1,
    title: 'Elden Ring: Shadow Realm',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
    releaseYear: 2024,
    platforms: ['PC', 'PS5', 'Xbox'],
    genres: ['Action RPG', 'Adventure'],
  },
  {
    id: 2,
    title: 'Cyberpunk 2077',
    image:
      'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
    releaseYear: 2020,
    platforms: ['PC', 'PS5', 'Xbox'],
    genres: ['RPG', 'Shooter'],
  },
  {
    id: 3,
    title: 'Baldur\'s Gate 3',
    image:
      'https://images.unsplash.com/photo-1577741314755-048d8525d31e?auto=format&fit=crop&w=900&q=80',
    rating: 4.9,
    releaseYear: 2023,
    platforms: ['PC', 'PS5', 'Mac'],
    genres: ['RPG', 'Strategy'],
  },
  {
    id: 4,
    title: 'Forza Horizon 5',
    image:
      'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
    releaseYear: 2021,
    platforms: ['PC', 'Xbox'],
    genres: ['Racing', 'Open World'],
  },
  {
    id: 5,
    title: 'Starfield',
    image:
      'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=900&q=80',
    rating: 4.2,
    releaseYear: 2023,
    platforms: ['PC', 'Xbox'],
    genres: ['RPG', 'Sci-Fi'],
  },
  {
    id: 6,
    title: 'Hades II',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    releaseYear: 2024,
    platforms: ['PC'],
    genres: ['Roguelike', 'Action'],
  },
  {
    id: 7,
    title: 'Hollow Knight: Silksong',
    image:
      'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?auto=format&fit=crop&w=900&q=80',
    rating: 4.8,
    releaseYear: 2025,
    platforms: ['PC', 'Switch', 'PS5'],
    genres: ['Metroidvania', 'Platformer'],
  },
  {
    id: 8,
    title: 'Avowed',
    image:
      'https://images.unsplash.com/photo-1614294149010-950b698f72c0?auto=format&fit=crop&w=900&q=80',
    rating: 4.4,
    releaseYear: 2025,
    platforms: ['PC', 'Xbox'],
    genres: ['RPG', 'Fantasy'],
  },
  {
    id: 9,
    title: 'Final Fantasy VII Rebirth',
    image:
      'https://images.unsplash.com/photo-1605899435973-ca2d1a8861cf?auto=format&fit=crop&w=900&q=80',
    rating: 4.7,
    releaseYear: 2024,
    platforms: ['PS5'],
    genres: ['JRPG', 'Action'],
  },
  {
    id: 10,
    title: 'Dragon\'s Dogma 2',
    image:
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=900&q=80',
    rating: 4.5,
    releaseYear: 2024,
    platforms: ['PC', 'PS5', 'Xbox'],
    genres: ['Action RPG', 'Fantasy'],
  },
  {
    id: 11,
    title: 'Senua\'s Saga: Hellblade II',
    image:
      'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=900&q=80',
    rating: 4.3,
    releaseYear: 2024,
    platforms: ['PC', 'Xbox'],
    genres: ['Action', 'Adventure'],
  },
  {
    id: 12,
    title: 'Black Myth: Wukong',
    image:
      'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80',
    rating: 4.6,
    releaseYear: 2024,
    platforms: ['PC', 'PS5'],
    genres: ['Action RPG', 'Soulslike'],
  },
]

const sections: GameSection[] = [
  {
    title: 'Trending',
    subtitle: 'Games gaining momentum across the community.',
    icon: Flame,
    games: games.slice(0, 4),
  },
  {
    title: 'Popular',
    subtitle: 'Highly rated picks players keep coming back to.',
    icon: Trophy,
    games: games.slice(3, 7),
  },
  {
    title: 'Upcoming',
    subtitle: 'Anticipated releases to keep on your radar.',
    icon: Clock,
    games: games.slice(6, 10),
  },
  {
    title: 'New Releases',
    subtitle: 'Fresh adventures from this release cycle.',
    icon: Sparkles,
    games: games.slice(8, 12),
  },
]

const featuredGame = games[0]

export function HomePage() {
  return (
    <div className="space-y-10 px-4 py-6 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center gap-6 p-6 sm:p-8 lg:p-10">
            <div className="space-y-3">
              <span className="inline-flex w-fit items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
                <Flame className="h-4 w-4" />
                Featured now
              </span>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-bold leading-tight text-foreground sm:text-5xl">
                  Discover your next favorite game.
                </h1>
                <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
                  Browse curated picks across trending, popular, upcoming, and newly released games.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="#trending"
                className="inline-flex h-10 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Explore games
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#new-releases"
                className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                New releases
              </a>
            </div>
          </div>

          <div className="relative min-h-80 overflow-hidden bg-muted lg:min-h-[30rem]">
            <img
              src={featuredGame.image}
              alt={featuredGame.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
              <GameCard game={featuredGame} className="max-w-sm bg-card/90 backdrop-blur" />
            </div>
          </div>
        </div>
      </section>

      {sections.map(section => (
        <GameShelf key={section.title} section={section} />
      ))}
    </div>
  )
}

function GameShelf({ section }: { section: GameSection }) {
  const Icon = section.icon
  const sectionId = section.title.toLowerCase().replaceAll(' ', '-')

  return (
    <section id={sectionId} className="space-y-4 scroll-mt-24">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
          </div>
          <p className="text-sm text-muted-foreground">{section.subtitle}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {section.games.map(game => (
          <GameCard key={`${section.title}-${game.id}`} game={game} />
        ))}
      </div>
    </section>
  )
}
