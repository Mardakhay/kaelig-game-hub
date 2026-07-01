import {
  type ReactNode,
  type HTMLAttributes,
  type ButtonHTMLAttributes,
  forwardRef,
  useEffect,
  useCallback,
} from 'react'
import { X } from 'lucide-react'
import { cn } from '@shared/lib/cn'

/* ── Overlay ─────────────────────────────────────────────── */

export interface ModalOverlayProps extends HTMLAttributes<HTMLDivElement> {
  onClose?: () => void
}

export const ModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  ({ className, onClick, onClose, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'fixed inset-0 z-50 bg-black/60 backdrop-blur-sm',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        className
      )}
      onClick={e => {
        onClick?.(e)
        if (e.target === e.currentTarget) onClose?.()
      }}
      {...props}
    />
  )
)
ModalOverlay.displayName = 'ModalOverlay'

/* ── Content ─────────────────────────────────────────────── */

export interface ModalContentProps extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4',
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ className, size = 'md', ...props }, ref) => (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      className={cn(
        'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2',
        'w-full rounded-xl border border-border bg-card shadow-2xl',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  )
)
ModalContent.displayName = 'ModalContent'

/* ── Header ──────────────────────────────────────────────── */

export interface ModalHeaderProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-start justify-between gap-4 border-b border-border p-6', className)}
      {...props}
    />
  )
)
ModalHeader.displayName = 'ModalHeader'

/* ── Title ───────────────────────────────────────────────── */

export interface ModalTitleProps extends HTMLAttributes<HTMLHeadingElement> {}

export const ModalTitle = forwardRef<HTMLHeadingElement, ModalTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={cn('text-lg font-semibold leading-tight text-foreground', className)}
      {...props}
    />
  )
)
ModalTitle.displayName = 'ModalTitle'

/* ── Description ─────────────────────────────────────────── */

export interface ModalDescriptionProps extends HTMLAttributes<HTMLParagraphElement> {}

export const ModalDescription = forwardRef<HTMLParagraphElement, ModalDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-muted-foreground', className)} {...props} />
  )
)
ModalDescription.displayName = 'ModalDescription'

/* ── Body ────────────────────────────────────────────────── */

export interface ModalBodyProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalBody = forwardRef<HTMLDivElement, ModalBodyProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('p-6', className)} {...props} />
  )
)
ModalBody.displayName = 'ModalBody'

/* ── Footer ──────────────────────────────────────────────── */

export interface ModalFooterProps extends HTMLAttributes<HTMLDivElement> {}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex items-center justify-end gap-3 border-t border-border p-6',
        className
      )}
      {...props}
    />
  )
)
ModalFooter.displayName = 'ModalFooter'

/* ── Close Button ────────────────────────────────────────── */

export interface ModalCloseProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const ModalClose = forwardRef<HTMLButtonElement, ModalCloseProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      className={cn(
        'ml-auto inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md',
        'text-muted-foreground transition-colors hover:bg-muted hover:text-foreground',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
        className
      )}
      {...props}
    >
      <X className="h-4 w-4" />
      <span className="sr-only">Close</span>
    </button>
  )
)
ModalClose.displayName = 'ModalClose'

/* ── Compound Modal ──────────────────────────────────────── */

export interface ModalProps {
  open: boolean
  onClose: () => void
  size?: ModalContentProps['size']
  children: ReactNode
  className?: string
}

export function Modal({ open, onClose, size, children, className }: ModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, handleKeyDown])

  if (!open) return null

  return (
    <>
      <ModalOverlay onClose={onClose} />
      <ModalContent size={size} className={className}>
        {children}
      </ModalContent>
    </>
  )
}
