import { NextResponse } from 'next/server'

/**
 * GET /api/faq
 * Returns frequently asked questions.
 *
 * TODO: fetch from a real database.
 *       FAQ items should be manageable via an admin panel.
 */
export async function GET() {
  const faq = [
    {
      id: 1,
      question: 'À partir de quel âge acceptez-vous les enfants ?',
      answer: 'À la crèche dès 6 mois, à la maternelle à partir de 3 ans révolus.',
    },
    {
      id: 2,
      question: 'Quelle langue est utilisée ?',
      answer: "Ingeri International School suit le programme national français. Le français est la langue principale, avec une ouverture à l'anglais et au kinyarwanda.",
    },
    {
      id: 3,
      question: 'Y a-t-il une restauration sur place ?',
      answer: 'Oui, repas équilibrés, variés et locaux préparés chaque jour. Les enfants participent aux routines de table.',
    },
    {
      id: 4,
      question: "Comment se déroule la période d'adaptation ?",
      answer: "Adaptation progressive : visites préalables avec les parents, présences courtes qui s'allongent, respect du rythme de l'enfant.",
    },
    {
      id: 5,
      question: 'Des facilités de paiement sont-elles possibles ?',
      answer: 'Oui, nous examinons chaque situation. Contactez-nous confidentiellement.',
    },
  ]

  return NextResponse.json(faq)
}
