import { z } from 'zod'
import type { loginSchema } from './auth-schema'


export type LoginForm = z.infer<typeof loginSchema>

export type Authentication = {
  access_token: string
  token_type: string
  duration: string
  deviceId: string
}

export type LoginRequest = LoginForm & {}

export type LoginResponse = Authentication & {
  user: AuthResponse
}

export type RefreshTokenRequest = {
  grantType: 'refresh_token'
  clientId: string
  clientSecret: string
  refreshToken: string
}

export type RefreshTokenResponse = {
  accessToken: string
  refreshToken: string
  expiresAt: string
  deviceId: string
}
export type AdminPolicyResponse = {
  action: string
  object: string
  subject: string
}
export type AdminPolicyPayload = {
  action: string
  object: string
  subject: string
}

type Role = {
  id: string
  name: string
  description: string
  created_at: string
  updated_at: string
}

export type AuthResponse = {
  id: string
  sendchap_id: string
  firstname: string
  lastname: string
  password: string
  pin_code: any
  email: string
  birthdate: string
  avatar: string
  phone: string
  phone_verified: boolean
  country_id: string
  verification_status: string
  referred_by: any
  referral_code: any
  active: boolean
  role: Role
  validated_phone_numbers: any
  created_at: string
  updated_at: string
}
