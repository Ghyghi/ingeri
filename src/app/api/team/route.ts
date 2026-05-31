import { NextResponse } from 'next/server'

/**
 * GET /api/team
 * Returns team member profiles.
 *
 * TODO: fetch from a real database.
 *       Photos should be stored in a CDN (e.g. Cloudinary, Vercel Blob).
 */
export async function GET() {
  const team = [
    {
      id: 1,
      name: 'Prénom Nom',
      role: 'Directrice pédagogique',
      campus: 'both',
      photoUrl: null, // TODO: replace with real CDN URL
    },
    {
      id: 2,
      name: 'Prénom Nom',
      role: 'Éducatrice crèche',
      campus: 'creche',
      photoUrl: null,
    },
    {
      id: 3,
      name: 'Prénom Nom',
      role: 'Enseignante maternelle',
      campus: 'maternelle',
      photoUrl: null,
    },
    {
      id: 4,
      name: 'Prénom Nom',
      role: 'Coordinatrice',
      campus: 'both',
      photoUrl: null,
    },
  ]

  return NextResponse.json(team)
}
