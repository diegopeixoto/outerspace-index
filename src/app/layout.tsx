import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
export const metadata: Metadata = {
  title: 'Índice OUTER SPACE',
  description: 'Indice dos tópicos do fórum OUTER SPACE',
}
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`${inter.className} flex flex-col items-center  w-screen h-screen bg-outer-space  bg-cover center-50 bg-fixed`}
      >
        {children}
      </body>
    </html>
  )
}
