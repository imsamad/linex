import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import React from "react";

const navbar = <Navbar logo={<b>LineX</b>} />;

const footer = <Footer>MIT {new Date().getFullYear()} © Languze.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body>
        <div className="container mx-auto">
          <Layout
            navbar={navbar}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
            footer={footer}
            // ... Your additional layout options
          >
            {children}
          </Layout>
        </div>
      </body>
    </html>
  );
}
