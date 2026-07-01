import { Link, useLocation } from '@tanstack/react-router'
import { ChevronLeft, ChevronRight, Gamepad2 } from 'lucide-react'
import { cn } from '@shared/lib/cn'
import { Button } from '@shared/ui/button'
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
        'hidden lg:flex flex-col border-r border-border bg-card transition-[width] duration-300 ease-in-out',
        collapsed ? 'w-16' : 'w-64'
      )}
    >
      {/* Logo area */}
      <div
        className={cn(
          'flex h-16 shrink-0 items-center border-b border-border px-4',
          collapsed ? 'justify-center' : 'justify-between'
        )}
      >
        {!collapsed && (
          <Link to="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
            <Gamepad2 className="h-5 w-5 text-primary" />
            <span className="text-base font-bold tracking-tight text-foreground">Kaelig</span>
          </Link>
        )}
        {collapsed && (
          <Link to="/" aria-label="Home">
            <Gamepad2 className="h-5 w-5 text-primary" />
          </Link>
        )}
      </div>

      {/* Nav links */}
      <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-2">
        {NAV_LINKS.map(({ to, label, icon: Icon }) => {
          const active = location.pathname === to
          return (
            <Link
              key={to}
              to={to}
              title={collapsed ? label : undefined}
              className={cn(
                'flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors',
                collapsed && 'justify-center px-2',
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
        <Button
          variant="ghost"
          size="icon"
          className={cn('w-full', collapsed ? 'justify-center' : 'justify-end')}
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          onClick={onToggle}
        >
          {collapsed ? (
            <ChevronRight className="h-4 w-4" />
          ) : (
            <ChevronLeft className="h-4 w-4" />
          )}
        </Button>
      </div>
    </aside>
  )
}
