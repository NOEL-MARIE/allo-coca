// import type { AxiosRequestConfig } from 'axios'
// import queryString from 'query-string'

// import axios from '@/config/axios'
// import { useToast } from 'vue-toastification'

// export class Http {
//   private static getError = (error: any) => {
//     const toast = useToast()
//     toast.error(error.msg)
//     throw error
//     // if (error.code === 'ERR_CANCELED') {
//     //   console.log('Request aborted:', error.message)
//     // } else if (error.response) {
//     //   const { data, status, statusText } = error.response
//     //   throw data != '' ? data : { message: `${status} ${statusText}` }
//     // } else {
//     //   throw error
//     // }
//   }

//   static async get<T = any>(
//     url: string,
//     queryParams?: Record<string, any> | undefined,
//     config?: AxiosRequestConfig,
//   ) {
//     try {
//       if (queryParams) {
//         if (!queryParams.limit) {
//           queryParams = { ...queryParams, limit: 10 }
//         }

//         const query = queryString.stringify(queryParams)
//         url = url.indexOf('?') == -1 ? `${url}?${query}` : `${url}&${query}`
//       }
//       const res = await axios.get<T>(url, config)
//       return res?.data
//     } catch (error: any) {
//       // Http.getError(error)
//       const toast = useToast()
//       // @ts-ignore
//       toast.error(error.response.data.msg)
//       throw error
//     }
//   }

//   static async post<T = any, D = any>(url: string, data: D, config?: AxiosRequestConfig) {
//     try {
//       const res = await axios.post<T>(url, data, config)
//       return res?.data
//     } catch (error: any) {
//       const toast = useToast()
//       // @ts-ignore
//       toast.error(error.response.data.msg)
//       throw error
//     }
//   }

//   static async put<T = any, D = any>(url: string, data: D, config?: AxiosRequestConfig) {
//     try {
//       const res = await axios.put<T>(url, data, config)
//       return res?.data
//     } catch (error: any) {
//       const toast = useToast()
//       // @ts-ignore
//       toast.error(res?.data.msg)
//       throw error
//     }
//   }

//   static async delete<T = any>(url: string, config?: AxiosRequestConfig) {
//     try {
//       const res = await axios.delete<T>(url, config)
//       return res?.data
//     } catch (error: any) {
//       const toast = useToast()
//       // @ts-ignore
//       toast.error(res?.data.msg)
//       throw error
//     }
//   }
// }
