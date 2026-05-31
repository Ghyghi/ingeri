import type { Metadata } from 'next'
// @ts-ignore: global CSS import type declarations are handled by Next.js
import '@/styles/globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SideCTA from '@/components/layout/SideCTA'

export const metadata: Metadata = {
  title: 'Ingeri – La P\'tite Crèche & Ingeri International School',
  description: 'Grandir avec amour, foi et excellence. Deux campus à Kigali pour vos enfants de 6 mois à 5 ans.',
  keywords: 'crèche, maternelle, Kigali, Rwanda, Montessori, international, école',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <SideCTA />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
