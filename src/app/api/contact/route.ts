import { NextRequest, NextResponse } from 'next/server'

/**
 * POST /api/contact
 * Handles contact form submissions for both campuses.
 *
 * Body: { campus: 'creche' | 'maternelle', prenom, nom, email, tel?, age|section?, message? }
 *
 * TODO: integrate with an email provider (e.g. Resend, Nodemailer, SendGrid)
 *       or a database to store enquiries.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { campus, prenom, nom, email, tel, message } = body

    if (!prenom || !nom || !email || !campus) {
      return NextResponse.json(
        { error: 'Champs requis manquants : prenom, nom, email, campus.' },
        { status: 400 }
      )
    }

    // TODO: send email / save to DB
    console.log('Contact form submission:', { campus, prenom, nom, email, tel, message })

    return NextResponse.json(
      { success: true, message: 'Votre message a bien été envoyé.' },
      { status: 200 }
    )
  } catch {
    return NextResponse.json(
      { error: 'Une erreur est survenue. Veuillez réessayer.' },
      { status: 500 }
    )
  }
}
