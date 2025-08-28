// import { System } from '@/constants';
import { System } from '@/constants/constant.enum'
import { Locales } from '@/locales/constants'

export const getLocale = (): string => {
  return localStorage.getItem(System.Locale) || Locales.EN
}

export const setLocale = (locale: string): void => {
  localStorage.setItem(System.Locale, locale)
}
