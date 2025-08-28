interface LanguageType {
  value: string
  label: string
  icon?: string
}

export enum Locales {
  FR = 'fr',
  EN = 'en',
  KM = 'km',
}

export const LOCALE_KEYS = [Locales.FR, Locales.EN, Locales.KM]

export const LANGUAGES: LanguageType[] = [
  {
    value: Locales.FR,
    label: 'Francais',
  },
  {
    value: Locales.EN,
    label: 'English',
  },
  {
    value: Locales.KM,
    label: 'ភាសាខ្មែរ',
  },
]
