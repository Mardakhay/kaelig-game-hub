import { Chrome as Home, Search, BookOpen, User } from 'lucide-react'

export const NAV_LINKS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/search', label: 'Search', icon: Search },
  { to: '/library', label: 'Library', icon: BookOpen },
  { to: '/profile', label: 'Profile', icon: User },
] as const
