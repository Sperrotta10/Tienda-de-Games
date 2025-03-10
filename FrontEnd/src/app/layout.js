import header from "../Components/header";
import "../Styles/style.css"
import Script from 'next/script'
import {inter} from "../fonts/fonts";
import '../Styles/globalStyles.css'

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {header()}
        <main className="main">{children}</main>
        
        {/* <Script src="../Scripts/script.js" strategy="afterInteractive"/> */}
      </body>
    </html>
  );
}
