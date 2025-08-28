import { z } from 'zod'

const envSchema = z.object({
  VITE_BASE_API_URL: z.string(),
  VITE_API_URL: z.string(),
  VITE_MOCK_API: z.string().optional(),
})
console.log(import.meta.env.local)

export const env = envSchema.parse(import.meta.env)
