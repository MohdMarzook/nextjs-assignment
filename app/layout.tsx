import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@mantine/core/styles.css';

import { ColorSchemeScript, MantineProvider, mantineHtmlProps } from '@mantine/core';
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mohd Marzook',
  description: 'Assignment',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>{children}</MantineProvider>
      </body>
    </html>
  )
}
