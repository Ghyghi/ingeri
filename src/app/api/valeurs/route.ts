import { NextResponse } from 'next/server'

/**
 * GET /api/valeurs
 * Returns the school's core values.
 *
 * TODO: fetch from a real database (e.g. Prisma + PostgreSQL).
 *       Admins should be able to update these via a CMS or admin panel.
 */
export async function GET() {
  const valeurs = [
    {
      id: 1,
      icon: '💛',
      title: 'Amour',
      description: 'Chaque enfant est accueilli inconditionnellement, comme un don précieux.',
    },
    {
      id: 2,
      icon: '✝️',
      title: 'Foi',
      description: 'La foi chrétienne inspire chaque interaction, chaque geste du quotidien.',
    },
    {
      id: 3,
      icon: '🌟',
      title: 'Excellence',
      description: 'Toujours viser le meilleur — pour chaque enfant, chaque famille.',
    },
    {
      id: 4,
      icon: '🤝',
      title: 'Communauté',
      description: 'Parents, enfants et éducateurs, ensemble pour grandir sereinement.',
    },
  ]

  return NextResponse.json(valeurs)
}
