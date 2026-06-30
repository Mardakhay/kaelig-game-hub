import { Link } from '@tanstack/react-router'

export function Header() {
  return (
    <header className="border-b border-border bg-card px-6 py-4">
      <nav className="flex items-center gap-6">
        <Link to="/" className="text-lg font-bold">
          Kaelig
        </Link>
        <div className="flex gap-4">
          <Link to="/search" className="text-muted-foreground hover:text-foreground transition-colors">
            Search
          </Link>
          <Link to="/library" className="text-muted-foreground hover:text-foreground transition-colors">
            Library
          </Link>
          <Link to="/profile" className="text-muted-foreground hover:text-foreground transition-colors">
            Profile
          </Link>
        </div>
      </nav>
    </header>
  )
}
