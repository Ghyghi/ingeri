import type {
  ContactFormData,
  FaqItem,
  TeamMember,
  Testimonial,
  TuitionRow,
  Valeur,
} from './types'

const BASE = process.env.NEXT_PUBLIC_API_BASE ?? ''

// ── Generic fetch wrapper ──

async function apiFetch<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  })

  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error(body?.error ?? `HTTP ${res.status}`)
  }

  return res.json() as Promise<T>
}

// ── Public API helpers ──

export const api = {
  /** GET /api/valeurs */
  getValeurs: () => apiFetch<Valeur[]>('/api/valeurs'),

  /** GET /api/testimonials */
  getTestimonials: () => apiFetch<Testimonial[]>('/api/testimonials'),

  /** GET /api/team */
  getTeam: () => apiFetch<TeamMember[]>('/api/team'),

  /** GET /api/tuition */
  getTuition: () => apiFetch<TuitionRow[]>('/api/tuition'),

  /** GET /api/faq */
  getFaq: () => apiFetch<FaqItem[]>('/api/faq'),

  /** POST /api/contact */
  submitContact: (data: ContactFormData) =>
    apiFetch<{ success: boolean; message: string }>('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
    }),

  /** POST /api/auth/login */
  login: (email: string, password: string) =>
    apiFetch<{ token?: string; user?: { id: number; email: string } }>(
      '/api/auth/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }
    ),
}
