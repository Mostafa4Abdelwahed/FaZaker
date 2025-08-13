import { Scheherazade_New, Tajawal } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "فذكر - Fazaker",
  description: "فَذَكِّر… لأننا ننسى وسط زحام الحياة.",
};

const scheherazade = Scheherazade_New({
  variable: "--font-scheherazade",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        dir="rtl"
        className={`${scheherazade.className} ${tajawal.className}`}
      >
        {children}
      </body>
    </html>
  );
}
