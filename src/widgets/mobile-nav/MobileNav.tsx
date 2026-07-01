import { Link, useLocation } from '@tanstack/react-router'
import { cn } from '@shared/lib/cn'
import { NAV_LINKS } from '@widgets/layout/navLinks'

export function MobileNav() {
  const location = useLocation()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-card/95 backdrop-blur-md md:hidden"
      aria-label="Mobile navigation"
    >
      <ul className="flex h-16 items-stretch divide-x divide-border">
        {NAV_LINKS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to
          return (
            <li key={to} className="flex flex-1">
              <Link
                to={to}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'flex flex-1 flex-col items-center justify-center gap-1 transition-colors',
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="text-[10px] font-medium leading-none">{label}</span>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
