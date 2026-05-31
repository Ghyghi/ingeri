import { NextResponse } from 'next/server'

/**
 * GET /api/tuition
 * Returns tuition fee information for all programmes.
 *
 * TODO: fetch from a real database.
 *       Fees should be updatable by admins without code changes.
 */
export async function GET() {
  const tuition = [
    { id: 1, programme: 'Crèche (6–24 mois)', fraisParMois: null, currency: 'RWF', note: 'À compléter' },
    { id: 2, programme: 'Petite section (3 ans)', fraisParMois: null, currency: 'RWF', note: 'À compléter' },
    { id: 3, programme: 'Moyenne section (3–4 ans)', fraisParMois: null, currency: 'RWF', note: 'À compléter' },
    { id: 4, programme: 'Grande section (4–5 ans)', fraisParMois: null, currency: 'RWF', note: 'À compléter' },
    { id: 5, programme: "Frais d'inscription (unique)", fraisParMois: null, currency: 'RWF', note: 'À compléter' },
  ]

  return NextResponse.json(tuition)
}
