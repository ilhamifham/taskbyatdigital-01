import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "@/styles/globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
