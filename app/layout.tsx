import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import React from 'react'
 
export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
} 

const navbar = (
  <Navbar
    logo={<b>Languze</b>}
    // ... Your additional navbar options
  />
)

const footer = <Footer>MIT {new Date().getFullYear()} © Languze.</Footer>
     
export default async function RootLayout({ children }:{children:React.ReactNode}) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <body>
      <Layout
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
          </Layout>
          </body>
    </html>
  )
}
