import type { ReactNode } from "react"
import "../globals.css"
import { i18n } from "@/lib/i18n/config"
import { localeToHtmlLang } from "@/lib/seo"

export default function RedirectLayout({
    children,
}: Readonly<{
    children: ReactNode
}>) {
    return (
        <html lang={localeToHtmlLang(i18n.defaultLocale)} suppressHydrationWarning>
            <head>
                <meta name="google-adsense-account" content="ca-pub-2301709267790754" />
            </head>
            <body>{children}</body>
        </html>
    )
}
