import { type RenderOptions, render } from '@testing-library/react-native'
import type { ReactElement, ReactNode } from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'

function Providers({ children }: { children: ReactNode }) {
  return <SafeAreaProvider>{children}</SafeAreaProvider>
}

const customRender = (
  ui: ReactElement,
  options: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: Providers, ...options })

export * from '@testing-library/react-native'
export { customRender as render, Providers }
