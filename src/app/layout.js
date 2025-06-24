import { Tajawal } from "next/font/google";
import "./globals.css";

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
      <body dir="rtl" className={`${tajawal.className} antialiased`}>{children}</body>
    </html>
  );
}
