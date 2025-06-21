import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="font-vietnam">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
