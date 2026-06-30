import { ThemeProvider } from '@app/providers'
import { QueryProvider } from '@app/providers'
import { RouterProvider } from '@app/providers'

export function App() {
  return (
    <ThemeProvider>
      <QueryProvider>
        <RouterProvider />
      </QueryProvider>
    </ThemeProvider>
  )
}
