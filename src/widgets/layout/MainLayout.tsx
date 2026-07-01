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
      <Header />

      <div className="flex flex-1">
        {/* Sidebar — lg+ only, rendered inside the content row */}
        <Sidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(v => !v)}
        />

        {/* Page content */}
        <main className="flex min-w-0 flex-1 flex-col">
          <div className="flex-1 pb-16 md:pb-0">{children}</div>
          <Footer />
        </main>
      </div>

      {/* Bottom nav — mobile only */}
      <MobileNav />
    </div>
  )
}
