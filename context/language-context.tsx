"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { indonesianTranslations } from "@/translations/id"
import { englishTranslations } from "@/translations/en"

type Language = "id" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  translations: typeof indonesianTranslations | typeof englishTranslations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("id")
  const [translations, setTranslations] = useState(indonesianTranslations)

  // Initialize language from localStorage if available
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null
    if (savedLanguage && (savedLanguage === "id" || savedLanguage === "en")) {
      setLanguage(savedLanguage)
      setTranslations(savedLanguage === "id" ? indonesianTranslations : englishTranslations)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "id" ? "en" : "id"
    setLanguage(newLanguage)
    setTranslations(newLanguage === "id" ? indonesianTranslations : englishTranslations)
    localStorage.setItem("language", newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
