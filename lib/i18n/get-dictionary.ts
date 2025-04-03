import "server-only"

const dictionaries = {
  en: () => import("./dictionaries/en.json").then((module) => module.default),
  pl: () => import("./dictionaries/pl.json").then((module) => module.default),
  es: () => import("./dictionaries/es.json").then((module) => module.default),
  de: () => import("./dictionaries/de.json").then((module) => module.default),
}

export type Locale = keyof typeof dictionaries
export type Dictionary = Awaited<ReturnType<(typeof dictionaries)["en"]>>

export const getDictionary = async (locale: Locale) => {
  return dictionaries[locale]()
}

