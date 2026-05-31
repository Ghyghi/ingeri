import { NextResponse } from 'next/server'

/**
 * GET /api/testimonials
 * Returns parent testimonials.
 *
 * TODO: fetch from a real database (e.g. Prisma + PostgreSQL).
 *       For now returns static data.
 */
export async function GET() {
  const testimonials = [
    {
      id: 1,
      quote: "Depuis que notre fille est à la P'tite Crèche Ingeri, elle s'épanouit chaque jour. L'équipe est à l'écoute, bienveillante, et nous sentons vraiment que notre enfant est entre de bonnes mains.",
      initials: 'AM',
      name: 'Amina M.',
      detail: 'Parent – Crèche',
      rating: 5,
    },
    {
      id: 2,
      quote: "L'approche Montessori combinée aux valeurs chrétiennes — c'est exactement ce que nous cherchions pour notre fils. Il rentre de l'école heureux, curieux et confiant.",
      initials: 'JK',
      name: 'Jean K.',
      detail: 'Parent – Maternelle',
      rating: 5,
    },
    {
      id: 3,
      quote: "Ce qui m'a séduite, c'est la vraie attention portée à chaque enfant. Pas un numéro, mais une personne unique. Ingeri, c'est une famille.",
      initials: 'GN',
      name: 'Gisèle N.',
      detail: 'Parent – Crèche',
      rating: 5,
    },
  ]

  return NextResponse.json(testimonials)
}
