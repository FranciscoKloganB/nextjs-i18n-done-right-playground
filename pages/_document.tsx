import React from "react"
import { getCookie } from "cookies-next"
import Document, { Html, Head, Main, NextScript, DocumentContext } from "next/document"
import i18n, { defaultLanguage, supportedLanguages } from "../i18n.config"

function selectLocale(ctx: DocumentContext): string {
  let prioritizedLanguage = defaultLanguage

  const cookieLanguage = getCookie("i18next", { req: ctx.req })?.toString()
  if (cookieLanguage && supportedLanguages.includes(cookieLanguage)) {
    prioritizedLanguage = cookieLanguage
  }

  const urlLanguage = ctx.locale
  if (urlLanguage && supportedLanguages.includes(urlLanguage)) {
    prioritizedLanguage = urlLanguage
  }

  return prioritizedLanguage
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps, locale: selectLocale(ctx) }
  }

  render() {
    const locale = this.props.locale

    return (
      <Html lang={locale} dir={i18n.dir(locale)}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
