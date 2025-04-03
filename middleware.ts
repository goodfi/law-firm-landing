import { type NextRequest, NextResponse } from "next/server"
import { match as matchLocale } from "@formatjs/intl-localematcher"
import Negotiator from "negotiator"

// List of all supported locales
export const locales = ["en", "pl", "es", "de"]
export const defaultLocale = "en"

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  const negotiatorHeaders: Record<string, string> = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  return matchLocale(languages, locales, defaultLocale)
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Check if the pathname is missing a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  )

  // If there is no locale in the pathname
  if (pathnameIsMissingLocale) {
    // Get the preferred locale
    const locale = getLocale(request)

    // Create a new URL with the locale
    const newUrl = new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url)

    // Preserve the search params
    newUrl.search = request.nextUrl.search

    // Redirect to the new URL
    return NextResponse.redirect(newUrl)
  }
}

export const config = {
  // Match all pathnames except for
  // - api routes
  // - _next/static (static files)
  // - _next/image (image optimization files)
  // - favicon.ico (favicon file)
  // - public files (e.g. robots.txt)
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}

