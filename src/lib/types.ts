// ── Content types ──

export interface Valeur {
  id: number
  icon: string
  title: string
  description: string
}

export interface Testimonial {
  id: number
  quote: string
  initials: string
  name: string
  detail: string
  rating: number
}

export interface TeamMember {
  id: number
  name: string
  role: string
  campus: 'creche' | 'maternelle' | 'both'
  photoUrl: string | null
}

export interface TuitionRow {
  id: number
  programme: string
  fraisParMois: number | null
  currency: string
  note: string
}

export interface FaqItem {
  id: number
  question: string
  answer: string
}

// ── Form types ──

export type Campus = 'creche' | 'maternelle'

export interface ContactFormData {
  campus: Campus
  prenom: string
  nom: string
  email: string
  tel?: string
  age?: string     // for crèche
  section?: string // for maternelle
  message?: string
}

export interface LoginFormData {
  email: string
  password: string
}

// ── API response wrappers ──

export interface ApiSuccess<T> {
  success: true
  data: T
}

export interface ApiError {
  success: false
  error: string
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError
