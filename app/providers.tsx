'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { Provider as JotaiProvider } from 'jotai'


export function Providers({children}: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <JotaiProvider>
          {children}
        </JotaiProvider>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
