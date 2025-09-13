import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediLaudos Pro - Especialistas em Diagnóstico',
  description: 'Equipe especializada de médicos radiologistas oferecendo laudos de alta qualidade para clínicas e hospitais. Entrega garantida em até 2 horas.',
  keywords: 'laudos médicos, radiologia, diagnóstico, telemedicina, exames médicos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}