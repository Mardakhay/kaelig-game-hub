import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@shared/lib/cn'
import { NAV_LINKS } from '@widgets/layout/navLinks'

export function MobileNav() {
  const location = useLocation()

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/90 backdrop-blur-md md:hidden">
      <ul className="flex h-16 items-stretch">
        {NAV_LINKS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to
          return (
            <li key={to} className="flex flex-1">
              <Link
                to={to}
                className={cn(
                  'flex flex-1 flex-col items-center justify-center gap-1 text-[10px] font-medium transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                )}
                aria-current={active ? 'page' : undefined}
              >
                <Icon
                  className={cn('h-5 w-5 shrink-0', active && 'text-primary')}
                  aria-hidden="true"
                />
                <span>{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
