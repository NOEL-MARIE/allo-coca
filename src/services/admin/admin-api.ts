// // import { env } from '@/config/env'
// import type { AdminPolicyPayload } from '../auth/auth-type'
// import type { DefaultFiltersPayload } from '../global.type'
// import { Http } from '../Http'
// import { AdminRouteApi } from './admin-constants'
// import type {
//   AdminRequest,
//   AdminResponse,
//   AdminRoleRequest,
//   AdminRoleUpdatePayload,
//   AdminUpdatePayload,
//   PermissionRequest,
//   RoleResponse,
// } from './admin-type'

// // const mock = new MockAdapter(axios.create())

// export async function createAdminApi(
//   data: AdminRequest,
// ): Promise<SuccessResponse<AdminResponse> | undefined> {
//   const result = await Http.post<SuccessResponse<AdminResponse>>(AdminRouteApi.default, data, {
//     // headers: {
//     //   'Device-Id': getDeviceId(),
//     // },
//   })

//   return result
// }
// export async function createRoleAdminApi(
//   data: AdminRoleRequest,
// ): Promise<SuccessResponse<any> | undefined> {
//   const result = await Http.post<SuccessResponse<any>>(AdminRouteApi.role, data, {
//     // headers: {
//     //   'Device-Id': getDeviceId(),
//     // },
//   })

//   return result
// }

// export async function updateRoleAdminApi(
//   data: AdminRoleUpdatePayload,
// ): Promise<SuccessResponse<any> | undefined> {
//   const result = await Http.put<SuccessResponse<any>>(AdminRouteApi.role, data, {
//     // headers: {
//     //   'Device-Id': getDeviceId(),
//     // },
//   })

//   return result
// }
// export async function addNewPermissionsToRoleApi(
//   id: string,
//   data: PermissionRequest[],
// ): Promise<SuccessResponse<any> | undefined> {
//   const result = await Http.post<SuccessResponse<any>>(
//     `${AdminRouteApi.addNewPolicies}?id=${id}`,
//     data,
//     {
//       // headers: {
//       //   'Device-Id': getDeviceId(),
//       // },
//     },
//   )

//   return result
// }
// export async function deleteRoleAdminApi(id: string): Promise<SuccessResponse<any> | undefined> {
//   const result = await Http.delete<SuccessResponse<any>>(AdminRouteApi.getRole(id))

//   return result
// }
// export async function deleteOnePermissionAdminApi(
//   payload: AdminPolicyPayload,
// ): Promise<any | undefined> {
//   const result = await Http.delete<any>(AdminRouteApi.policy, {
//     data: payload,
//   })

//   return result
// }

// export async function fetchAdminsApi(
//   page: number,
// ): Promise<SuccessResponse<PaginationResponse<AdminResponse>> | undefined> {
//   const result = await Http.get<SuccessResponse<PaginationResponse<AdminResponse>>>('/admins', {
//     page,
//   })
//   return result
// }
// export async function fetchRolesApi(
//   page: number,
// ): Promise<SuccessResponse<PaginationResponse<RoleResponse>> | undefined> {
//   const result = await Http.get<SuccessResponse<PaginationResponse<RoleResponse>>>(
//     AdminRouteApi.role,
//     {
//       page: page,
//       limit: 100,
//     },
//   )
//   return result
// }
// export async function fetchRoleByIdApi(
//   id: string,
// ): Promise<SuccessResponse<RoleResponse> | undefined> {
//   const result = await Http.get<SuccessResponse<RoleResponse> | undefined>(
//     AdminRouteApi.getRole(id),
//   )
//   return result
// }

// export async function fetchFiltersAdminsApi({
//   payload,
// }: {
//   payload: DefaultFiltersPayload
// }): Promise<SuccessResponse<PaginationResponse<AdminResponse>> | undefined> {
//   const result = await Http.get<SuccessResponse<PaginationResponse<AdminResponse>>>(
//     AdminRouteApi.adminsFilter,
//     // '/admin/api/v1/user/admins',
//     payload,
//   )

//   return result
// }
// export async function fetchAdminByIdApi({
//   id,
// }: {
//   id: string
// }): Promise<SuccessResponse<AdminResponse> | undefined> {
//   // return await Http.get<SuccessResponse<AdminResponse>>(`/admin/api/v1/user/${id}`)
//   return await Http.get<SuccessResponse<AdminResponse>>(AdminRouteApi.getOne(id))
// }

// export async function updateAdminApi({
//   id,
//   data,
// }: {
//   id: string
//   data: AdminUpdatePayload
// }): Promise<SuccessResponse<AdminResponse> | undefined> {
//   return await Http.put<SuccessResponse<AdminResponse>>(AdminRouteApi.getOne(id), data)
// }
