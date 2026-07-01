import { type ReactNode, useState } from 'react'
import { Header } from '@widgets/header'
import { Footer } from '@widgets/footer'
import { Sidebar } from '@widgets/sidebar'
import { MobileNav } from '@widgets/mobile-nav'

interface MainLayoutProps {
  children: ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Sticky header — full width */}
      <Header />

      {/* Content row: sidebar + page */}
      <div className="flex flex-1">
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(v => !v)}
        />

        {/* Main area: page content + footer stacked */}
        <div className="flex min-w-0 flex-1 flex-col">
          {/* Extra bottom padding on mobile so content clears the fixed MobileNav */}
          <main className="flex-1 pb-16 md:pb-0">
            {children}
          </main>
          <Footer />
        </div>
      </div>

      {/* Bottom tab bar — mobile only, fixed */}
      <MobileNav />
    </div>
  )
}
