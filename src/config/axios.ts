// // import { refreshToken } from '@/modules/auth/auth-service'
// import axios, { HttpStatusCode, type AxiosInstance } from 'axios'
// import router from '@/router'

// import { destroySensitiveInfo, getAccessToken, getDeviceId } from '@/services/auth/auth-util'
// import { env } from './env'
// import { logout } from '@/services/auth/auth-service'
// import { AppRoute } from '@/constants/app-route'
// import { useLoaderStore } from '@/stores/useLoaderStore'

// const axiosInstance: AxiosInstance = axios.create({
//   baseURL: env.VITE_API_URL,
//   // withCredentials: true,
//   headers: {
//     Accept: 'application/json',
//     'Access-Control-Allow-Origin': '*',
//     'Content-Type': 'application/json',
//   },
// })

// axiosInstance.interceptors.request.use(
//   async (config) => {
//     const token = getAccessToken() // Retrieve access token
//     if (token) {
//       config.headers['Device-Id'] = getDeviceId() // Add device ID
//       config.headers['Authorization'] = `Bearer ${token}` // Add authorization header
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// // Response Interceptor
// axiosInstance.interceptors.response.use(
//   (response) => {
//     return response // Return the response as-is
//   },
//   async (error) => {
//     const res: ErrorResponse = error?.response?.data
//     const originalRequestConfig = error.config
//     const { stopLoading } = useLoaderStore()
//     stopLoading()

//     if (res?.code === HttpStatusCode.Unauthorized || res?.code === HttpStatusCode.NotAcceptable) {
//       if (router.currentRoute.value.name !== AppRoute.LOGIN.name) {
//         destroySensitiveInfo()
//         // const router = useRouter()
//         router.push({ name: AppRoute.LOGIN.name, replace: true })
//       }
//     }

//     // Handle token expiration
//     // if (
//     //   (res?.code === HttpStatusCode.Unauthorized || res?.code === HttpStatusCode.NotAcceptable) &&
//     //   !originalRequestConfig._isRetry
//     // ) {
//     //   try {
//     //     // Set retry flag to avoid infinite loops
//     //     originalRequestConfig._isRetry = true

//     //     // Refresh the token
//     //     const refreshResponse = await refreshToken()
//     //     if (refreshResponse) {
//     //       // Update the authorization header with the new token
//     //       originalRequestConfig.headers['Authorization'] = getBearerToken()
//     //       return axios.request(originalRequestConfig) // Retry the original request
//     //     }
//     //   } catch (refreshError) {
//     //     // Handle refresh token failure (e.g., redirect to login)
//     //     console.error('Token refresh failed:', refreshError)
//     //     return Promise.reject(refreshError)
//     //   }
//     // }

//     // Reject all other errors
//     return Promise.reject(error)
//   },
// )

// export default axiosInstance
