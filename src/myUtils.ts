// import { CalendarDate, CalendarDateTime, type DateValue, ZonedDateTime } from '@internationalized/date'
// import axios from 'axios'
// import type { Ref } from 'vue'
// import { z } from 'zod'

// function delay(ms:number) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }


// export const dateValueSchema = z.custom<DateValue>(
//   (val) => {
//     return (
//       val instanceof CalendarDate || val instanceof CalendarDateTime || val instanceof ZonedDateTime
//     )
//   },
//   {
//     message: 'La date est requise',
//   },
// )

// export const formatRelativeDate = (date: Date): string => {
//   const now = new Date()
//   const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
//   const yesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1)
//   const inputDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())

//   // Formater l'heure
//   const timeFormatter = new Intl.DateTimeFormat('fr-FR', {
//     hour: '2-digit',
//     minute: '2-digit',
//     hour12: false, // Utiliser le format 24h
//   })

//   const timeString = `à ${timeFormatter.format(date)}`

//   // Comparer les dates
//   if (inputDate.getTime() === today.getTime()) {
//     return `Aujourd’hui ${timeString}`
//   } else if (inputDate.getTime() === yesterday.getTime()) {
//     return `Hier ${timeString}`
//   } else {
//     // Formater la date pour les autres cas
//     const dateFormatter = new Intl.DateTimeFormat('fr-FR', {
//       day: '2-digit',
//       month: '2-digit',
//       year: 'numeric',
//     })
//     return `${dateFormatter.format(date)} ${timeString}`
//   }
// }

// export const formatPhoneNumber = (phone: string): string => `${phone}`

// export const copyToClipBoard = (text: string) => {
//   navigator.clipboard.writeText(text)
// }

// export const convertDateToDateValue = (textDate: string) => {
//   let date: Date

//   // Vérifier les différents formats de date
//   // Format DD/MM/YY ou DD-MM-YY (avec année à 2 chiffres)
//   if (/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2}$/.test(textDate)) {
//     const separator = textDate.includes('/') ? '/' : '-'
//     const [day, month, shortYear] = textDate.split(separator).map((part) => parseInt(part, 10))

//     // Convertir l'année à deux chiffres en année à quatre chiffres
//     const fullYear = shortYear < 50 ? 2000 + shortYear : 1900 + shortYear

//     date = new Date(fullYear, month - 1, day)
//   }
//   // Format DD/MM/YYYY ou DD-MM-YYYY (avec année à 4 chiffres)
//   else if (/^\d{1,2}[\/\-]\d{1,2}[\/\-]\d{4}$/.test(textDate)) {
//     const separator = textDate.includes('/') ? '/' : '-'
//     const [day, month, year] = textDate.split(separator).map((part) => parseInt(part, 10))

//     date = new Date(year, month - 1, day)
//   } else {
//     // Utiliser le constructeur standard pour les autres formats
//     date = new Date(textDate)
//   }

//   // Extraction de l'année, du mois (0-11 dans Date, donc +1) et du jour
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1 // Les mois commencent à 0 en JavaScript
//   const day = date.getDate()

//   // Création d'un nouvel objet DateValue
//   return new CalendarDate(year, month, day)
// }

// export const generateColor = (): string => {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`
// }

// export async function downloadFileWithAxios(url: string, filename: string): Promise<File> {
//   try {
//     const response = await axios({
//       url,
//       method: 'GET',
//       responseType: 'blob',
//     })

//     return new File([response.data], filename, {
//       type: response.headers['content-type'],
//     })
//   } catch (error) {
//     console.error('Erreur lors du téléchargement avec axios:', error)
//     throw error
//   }
// }
// export const defaultProviderColor = [
//   {
//     name: 'mtn',
//     color: '#ffc403',
//   },
//   {
//     name: 'orange',
//     color: '#f58220',
//   },
//   {
//     name: 'moov',
//     color: '#005ca8',
//   },
//   {
//     name: 'wave',
//     color: '#1dc8ff',
//   },
// ]

// export const createDecreasingArray = ({ startValue = 1, step = 0.05, numberOfElements = 4 }) => {
//   const result = []

//   for (let i = 0; i < numberOfElements; i++) {
//     // Utilisation de toFixed(2) pour éviter les problèmes d'arrondi en JS
//     const value = parseFloat((startValue - i * step).toFixed(2))
//     result.unshift(value) // Ajoute au début du tableau
//   }

//   return result
// }

// export const normalizeData = (
//   data: number[],
// ): {
//   normalizedData: number[]
//   scaleFactor: number
// } => {
//   const maxValue = Math.max(...data)

//   // Déterminer le facteur de mise à l'échelle approprié
//   let scaleFactor = 1
//   if (maxValue > 1000000) {
//     scaleFactor = 1000000 // En millions
//   } else if (maxValue > 1000) {
//     scaleFactor = 1000 // En milliers
//   }

//   return {
//     normalizedData: data.map((val) => val / scaleFactor),
//     scaleFactor,
//   }
// }

// /**
//  * Retourne un objet Date représentant aujourd'hui à minuit (00:00:00)
//  * @returns {Date} L'objet Date pour aujourd'hui à minuit
//  */
// export const getMidnightToday = () => {
//   const today = new Date()
//   today.setHours(0, 0, 0, 0)
//   return today
// }

// export const formatPrice = (price: number, current?: string): string => {
//   // return price.toLocaleString('fr-FR', { style: 'currency', currency: 'XOF' })

//   return new Intl.NumberFormat('fr-FR', {
//     style: 'currency',
//     currency: current ?? 'XOF',
//   }).format(price)
// }
