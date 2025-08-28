// import { toRaw } from 'vue'
// import type { AdminPolicyPayload } from '../auth/auth-type'
// import type { DefaultFiltersPayload } from '../global.type'
// import {
//   addNewPermissionsToRoleApi,
//   createAdminApi,
//   createRoleAdminApi,
//   deleteOnePermissionAdminApi,
//   deleteRoleAdminApi,
//   fetchAdminByIdApi,
//   fetchAdminsApi,
//   fetchFiltersAdminsApi,
//   fetchRoleByIdApi,
//   fetchRolesApi,
//   updateAdminApi,
//   updateRoleAdminApi,
// } from './admin-api'
// import type {
//   AdminRequest,
//   AdminResponse,
//   AdminRoleRequest,
//   AdminRoleUpdatePayload,
//   AdminUpdatePayload,
//   PermissionRequest,
//   RoleResponse,
// } from './admin-type'

// export async function fetchAdmins(
//   page: number,
// ): Promise<PaginationResponse<AdminResponse> | undefined> {
//   try {
//     const res = await fetchAdminsApi(page)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
// export async function fetchFiltersAdmins(
//   payload: DefaultFiltersPayload,
// ): Promise<PaginationResponse<AdminResponse> | undefined> {
//   try {
//     let payloadData = { ...payload }
//     const res = await fetchFiltersAdminsApi({
//       payload,
//     })

//     let customData = res?.data;

//     customData?.items.sort((a, b) => {
//       const dateA = new Date(a.created_at);
//       const dateB = new Date(b.created_at);
//       return dateB.getTime() - dateA.getTime(); // dateB - dateA pour le plus récent au plus ancien
//     });


//     return customData;
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }

// export async function createAdmin(data: AdminRequest): Promise<AdminResponse | undefined> {
//   try {
//     const res = await createAdminApi(data)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }

// export async function updateAdmin({
//   id,
//   data,
// }: {
//   id: string
//   data: AdminUpdatePayload
// }): Promise<AdminResponse | undefined> {
//   try {
//     const res = await updateAdminApi({
//       data: data,
//       id: id,
//     })

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }

// export async function fetchOneAdmin({ id }: { id: string }): Promise<AdminResponse | undefined> {
//   try {
//     const res = await fetchAdminByIdApi({ id: id })

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }

// export async function createRoleAdmin(data: AdminRoleRequest): Promise<any | undefined> {
//   try {
//     const res = await createRoleAdminApi(data)

//     return res
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }

// export async function fetchRoles(
//   page: number = 1,
// ): Promise<PaginationResponse<RoleResponse> | undefined> {
//   try {
//     const res = await fetchRolesApi(page)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
// export async function fetchRoleById(id: string): Promise<RoleResponse | undefined> {
//   try {
//     const res = await fetchRoleByIdApi(id)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
// export async function updateRoleAdmin(
//   data: AdminRoleUpdatePayload,
// ): Promise<SuccessResponse<any> | undefined> {
//   try {
//     const res = await updateRoleAdminApi(data)

//     return res?.data
//   } catch (error) {
//     throw Error(error as string)
//   }
// }
// export async function addNewPermissionsToRole(
//   id: string,
//   data: PermissionRequest[],
// ): Promise<SuccessResponse<any> | undefined> {
//   try {
//     console.log(toRaw(data))
//     const res = await addNewPermissionsToRoleApi(id, data)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
// export async function deleteRoleAdmin(id: string): Promise<SuccessResponse<any> | undefined> {
//   try {
//     const res = await deleteRoleAdminApi(id)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
// export async function deleteOnePermissionAdmin(
//   payload: AdminPolicyPayload,
// ): Promise<any | undefined> {
//   try {
//     const res = await deleteOnePermissionAdminApi(payload)

//     return res?.data
//   } catch (error: any) {
//     throw Error(error.response.data.message)
//   }
// }
