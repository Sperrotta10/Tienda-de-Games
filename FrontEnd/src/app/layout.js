import Header from "../Components/header";
import Sidebar from "../Components/sidebar";
import "../Styles/style.css";
import { inter } from "../fonts/fonts";
import "../Styles/globalStyles.css";
import { AuthProvider } from "@/utils/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <AuthProvider>
          <div className="layout">
            <Sidebar />
            <div className="mainContent">
              <Header />
              <main className="main">{children}</main>
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
