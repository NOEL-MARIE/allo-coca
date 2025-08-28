// import { z } from 'zod'
// import type { adminRoleSchema, adminSchema } from './admin-schema'
// import type { AdminRole } from './admin-constants'


// export type AdminForm = z.infer<typeof adminSchema>
// export type AdminRoleForm = z.infer<typeof adminRoleSchema>

// export type AdminRequest = {
//   email: string
//   firstname: string
//   lastname: string
//   phone: string
//   role_id: string
//   birthdate: string
//   country_id: string
// }
// export type AdminRoleRequest = AdminRoleForm & {
//   description: string
//   permissions: PermissionRequest[]
// }
// export type AdminRoleUpdatePayload = {
//   id?: string
//   name?: string
//   description?: string
//   permissions?: PermissionRequest[]
// }

// export type PermissionRequest = {
//   v1: string
//   v2: string
// }

// export type AdminResponse = {
//   accepted_tos: boolean
//   active: boolean
//   avatar: string
//   birthdate: string

//   country_id: string
//   created_at: string
//   email: string
//   email_verified: boolean
//   firstname: string
//   id: string
//   is_superuser: boolean
//   last_login: string
//   lastname: string
//   password: string
//   phone: string
//   phone_verified: boolean
//   pin_code: string
//   referral_code: string
//   referred_by: string
//   reward_amount: number
//   role: RoleResponse
//   role_id: string
//   sendchap_id: string
//   updated_at: string
//   validated_phone_numbers: string[]
//   verification_status: string
//   withdrawn_amount: number
// }

// export type AdminUpdatePayload = {
//   // id?: string

//   active?: boolean
//   avatar?: string
//   birthdate?: string
//   email?: string
//   firstname?: string
//   lastname?: string
//   phone?: string
//   role_id?: string
// }

// export type PermissionResponse = {
//   v1: string
//   v2: string
// }
// export type PermissionDefaultResponse = {
//   v1_object: string
//   v2_action: string
//   subject: string
// }

// // v1: permission.object,
// // v2: permission.action

// export type RoleResponse = {
//   id: string
//   name: string
//   description: string
//   permissions?: PermissionResponse[]
// }
