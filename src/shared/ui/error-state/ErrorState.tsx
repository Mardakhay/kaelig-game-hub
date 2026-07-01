import { type ReactNode } from 'react'
import { CircleAlert as AlertCircle, RefreshCw } from 'lucide-react'
import { cn } from '@shared/lib/cn'
import { Button } from '@shared/ui/button/Button'

export interface ErrorStateProps {
  title?: string
  description?: string
  icon?: ReactNode
  onRetry?: () => void
  retryLabel?: string
  action?: ReactNode
  className?: string
}

export function ErrorState({
  title = 'Something went wrong',
  description = 'An unexpected error occurred. Please try again.',
  icon,
  onRetry,
  retryLabel = 'Try again',
  action,
  className,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className={cn(
        'flex flex-col items-center justify-center gap-4 rounded-xl border border-error/20 bg-error/5 px-6 py-16 text-center',
        className
      )}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-error/15 text-error">
        {icon ?? <AlertCircle className="h-7 w-7" />}
      </span>
      <div className="flex flex-col gap-1">
        <p className="text-base font-semibold text-foreground">{title}</p>
        {description && <p className="text-sm text-muted-foreground">{description}</p>}
      </div>
      <div className="mt-2 flex items-center gap-3">
        {onRetry && (
          <Button variant="outline" size="sm" onClick={onRetry}>
            <RefreshCw className="h-4 w-4" />
            {retryLabel}
          </Button>
        )}
        {action}
      </div>
    </div>
  )
}
