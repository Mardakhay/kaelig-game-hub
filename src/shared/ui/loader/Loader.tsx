import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@shared/lib/cn'

const loaderVariants = cva('animate-spin rounded-full border-solid border-current', {
  variants: {
    size: {
      xs: 'h-3 w-3 border-2',
      sm: 'h-4 w-4 border-2',
      md: 'h-6 w-6 border-2',
      lg: 'h-8 w-8 border-[3px]',
      xl: 'h-12 w-12 border-4',
    },
    variant: {
      default: 'text-primary border-t-transparent',
      muted: 'text-muted-foreground border-t-transparent',
      white: 'text-white border-t-transparent',
    },
  },
  defaultVariants: {
    size: 'md',
    variant: 'default',
  },
})

export interface LoaderProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof loaderVariants> {
  label?: string
}

export function Loader({ size, variant, label = 'Loading…', className, ...props }: LoaderProps) {
  return (
    <span
      role="status"
      aria-label={label}
      className={cn('inline-flex items-center gap-2', className)}
      {...props}
    >
      <span className={loaderVariants({ size, variant })} />
      <span className="sr-only">{label}</span>
    </span>
  )
}

export interface LoaderOverlayProps {
  label?: string
  className?: string
}

export function LoaderOverlay({ label = 'Loading…', className }: LoaderOverlayProps) {
  return (
    <div
      role="status"
      aria-label={label}
      className={cn(
        'absolute inset-0 z-10 flex items-center justify-center rounded-[inherit] bg-background/60 backdrop-blur-sm',
        className
      )}
    >
      <Loader size="lg" />
      <span className="sr-only">{label}</span>
    </div>
  )
}
