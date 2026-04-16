import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalGridCanvas from "@/components/GridCanvas";

export const metadata = {
  title: "Dr. Alexander Soto",
  description: "Traumatólogo Especialista en Pie y Tobillo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="app d-flex flex-column min-vh-100"
        suppressHydrationWarning
      >
        <GlobalGridCanvas />
        <Navbar />
        {children}
        <Footer />
        <a
          href="https://wa.me/593990165538?text=Hola,%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-button"
        >
          <img
            src="/assets/icons/icons8-whatsapp-96.png"
            alt="Icono de WhatsApp"
          />
        </a>
      </body>
    </html>
  );
}
