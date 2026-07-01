import { Link, useLocation } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react'
import { cn } from '@shared/lib/cn'
import { NAV_LINKS } from '@widgets/layout/navLinks'

export interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
}

export function Sidebar({ collapsed, onToggle }: SidebarProps) {
  const location = useLocation()

  return (
    <aside
      className={cn(
        'sticky top-16 hidden h-[calc(100vh-4rem)] shrink-0 flex-col border-r border-border bg-card transition-[width] duration-300 ease-in-out lg:flex',
        collapsed ? 'w-16' : 'w-60'
      )}
    >
      {/* Logo row */}
      <div
        className={cn(
          'flex h-14 shrink-0 items-center border-b border-border',
          collapsed ? 'justify-center px-2' : 'justify-start px-4'
        )}
      >
        <Link
          to="/"
          className={cn(
            'flex items-center gap-2.5 transition-opacity hover:opacity-80',
            collapsed && 'justify-center'
          )}
          aria-label="Home"
        >
          <Gamepad2 className="h-5 w-5 shrink-0 text-primary" />
          {!collapsed && (
            <span className="text-sm font-bold tracking-tight text-foreground">Kaelig</span>
          )}
        </Link>
      </div>

      {/* Nav links */}
      <nav className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2">
        {NAV_LINKS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to
          return (
            <Link
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg py-2.5 text-sm font-medium transition-colors',
                collapsed ? 'justify-center px-2' : 'px-3',
                active
                  ? 'bg-primary/10 text-primary'
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              )}
            >
              <Icon className="h-4 w-4 shrink-0" />
              {!collapsed && <span>{label}</span>}
            </Link>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <div className="border-t border-border p-2">
        <button
          type="button"
          onClick={onToggle}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          className={cn(
            'flex h-9 w-full items-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
            collapsed ? 'justify-center' : 'justify-end px-2'
          )}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4 shrink-0" />
          ) : (
            <ChevronLeft className="h-4 w-4 shrink-0" />
          )}
        </button>
      </div>
    </aside>
  )
}
