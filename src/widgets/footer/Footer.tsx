import { Link } from '@tanstack/react-router'
import { Gamepad2, Github, Twitter } from 'lucide-react'

const year = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <span className="text-sm font-semibold text-foreground">Kaelig</span>
          </div>

          {/* Footer nav */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {(['/', '/search', '/library', '/profile'] as const).map(path => (
              <Link
                key={path}
                to={path}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter / X"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <span className="text-xs text-muted-foreground">
              &copy; {year} Kaelig
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
