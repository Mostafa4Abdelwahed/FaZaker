import { Tajawal } from "next/font/google";
import "./globals.css";
import 'swiper/css';
import 'swiper/css/navigation';
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import FloatingAlertData from "@/components/organisms/FloatingAlertData";

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export const metadata = {
  title: "فذكر - Fazaker",
  description: "فَذَكِّر… لأننا ننسى وسط زحام الحياة.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body dir="rtl" className={`${tajawal.className}`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
        <FloatingAlertData />
      </body>
    </html>
  );
}
