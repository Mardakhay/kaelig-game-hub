import { createRootRoute, Outlet } from '@tanstack/react-router'
import { MainLayout } from '@widgets/layout'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  )
}
