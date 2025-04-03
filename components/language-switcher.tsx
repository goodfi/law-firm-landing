"use client"

import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

interface LanguageSwitcherProps {
  locale: string
}

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const router = useRouter()
  const pathname = usePathname()

  // Get the path without the locale
  const pathnameWithoutLocale = pathname.replace(/^\/[a-z]{2}(?:\/|$)/, "/")

  const languages = [
    { code: "en", name: "English" },
    { code: "pl", name: "Polski" },
    { code: "es", name: "Español" },
    { code: "de", name: "Deutsch" },
  ]

  const handleLanguageChange = (newLocale: string) => {
    // Redirect to the same page but with the new locale
    const newPath = `/${newLocale}${pathnameWithoutLocale === "/" ? "" : pathnameWithoutLocale}`
    router.push(newPath)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-blue-900/20">
          <Globe className="h-5 w-5" />
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={locale === language.code ? "bg-blue-900/20" : ""}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

