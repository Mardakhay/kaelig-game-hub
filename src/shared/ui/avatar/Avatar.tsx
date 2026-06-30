import { type HTMLAttributes, forwardRef } from 'react'
import { cn } from '@shared/lib/cn'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {}

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  )
)

Avatar.displayName = 'Avatar'

export interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

export const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => (
    <img
      ref={ref}
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  )
)

AvatarImage.displayName = 'AvatarImage'

export interface AvatarFallbackProps extends HTMLAttributes<HTMLDivElement> {}

export const AvatarFallback = forwardRef<HTMLDivElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        className
      )}
      {...props}
    />
  )
)

AvatarFallback.displayName = 'AvatarFallback'
