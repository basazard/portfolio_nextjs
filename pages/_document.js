import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='antialiased font-sans tracking-tight bg-zinc-50 dark:bg-black'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
