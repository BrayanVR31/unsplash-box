import { Be_Vietnam_Pro } from "next/font/google";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "600"],
});

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={beVietnamPro.className}>
      <body className="bg-hero bg-no-repeat">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

export default RootLayout;
