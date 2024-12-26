import Header from "@/components/Header";
import { SanityLive } from "@/sanity/lib/live";
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import "../globals.css";
import HeaderDiscount from "@/components/HeaderDiscount";
import SliderImages from "@/components/SliderImages";

export const metadata: Metadata = {
  title: "Ropa online - Tienda de ropa para hombre y mujer",
  description:
    "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
  keywords: [
    "ropa online",
    "tienda de ropa",
    "moda",
    "hombre",
    "mujer",
    "casual",
    "fiesta",
    "trabajo",
    "deportiva",
  ],
  authors: [{ name: "Tu nombre", url: "tu-dominio.com" }],
  openGraph: {
    title: "Ropa online - Tienda de ropa para hombre y mujer",
    description:
      "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
    url: "tu-dominio.com",
    siteName: "Tu nombre",
    type: "website",
    images: [
      {
        url: "https://example.com/ropa-online.jpg",
        width: 800,
        height: 600,
        alt: "Imagen de ropa online",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ropa online - Tienda de ropa para hombre y mujer",
    description:
      "En nuestra tienda de ropa online encontrar s la  ltima moda para hombre y mujer. Desde ropa casual hasta ropa de fiesta, pasando por ropa de trabajo o ropa deportiva. En nuestra tienda de ropa encontrar s la ropa que mejor se adapte a tus necesidades y gustos.",
    creator: "@tu-nombre",
    images: [
      {
        url: "https://example.com/ropa-online.jpg",
        width: 800,
        height: 600,
        alt: "Imagen de ropa online",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider dynamic>
      <html lang="es">
        <body suppressHydrationWarning>
          <main>
            <HeaderDiscount />
            <Header />

            {children}
          </main>
          <SanityLive />
        </body>
      </html>
    </ClerkProvider>
  );
}
