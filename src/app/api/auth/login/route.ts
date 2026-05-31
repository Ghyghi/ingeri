import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/auth/login
 * Authenticates a parent user.
 *
 * Body: { email: string, password: string }
 *
 * TODO:
 *   - Implement a real auth strategy (e.g. NextAuth.js, JWT, sessions).
 *   - Connect to a user database (Prisma + PostgreSQL recommended).
 *   - Hash passwords with bcrypt.
 *   - Return a session token or set an httpOnly cookie.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email et mot de passe requis.' },
        { status: 400 }
      )
    }

    // TODO: validate credentials against database
    // const user = await db.user.findUnique({ where: { email } })
    // const valid = user && await bcrypt.compare(password, user.passwordHash)

    // Stub: always reject until real auth is implemented
    return NextResponse.json(
      { error: 'Authentification non encore implémentée.' },
      { status: 501 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue.' },
      { status: 500 }
    )
  }
}
