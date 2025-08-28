import { i18n } from '@/locales'
import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({ required_error: "L'adresse email est requise" })
    .email({ message: "Le format de l'adresse email est invalide" })
    .trim()
    .refine((email) => email.endsWith('@sendchap.ci'), {
      message: "L'email doit appartenir au domaine @sendchap.ci",
    }),
  password: z
    .string({ required_error: 'Le mot de passe est requis' })
    .min(1, { message: 'Le mot de passe ne peut pas être vide' })
    .trim(),
})
