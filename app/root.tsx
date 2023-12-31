import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'
import type { LinksFunction } from '@vercel/remix'
import stylesheet from '~/tailwind.css'

export const links: LinksFunction = () => [
  { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
  { rel: 'stylesheet', href: stylesheet },
]

export default function App() {
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <Meta/>
        <Links/>
      </head>
      <body className='bg-green-200'>
        <Outlet/>
        <ScrollRestoration/>
        <Scripts/>
        <LiveReload/>
      </body>
    </html>
  )
}
