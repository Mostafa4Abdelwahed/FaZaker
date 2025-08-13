import "swiper/css";
import "swiper/css/navigation";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import FloatingAlertData from "@/components/organisms/FloatingAlertData";

export const metadata = {
  title: "فذكر - Fazaker",
  description: "فَذَكِّر… لأننا ننسى وسط زحام الحياة.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <Footer />
      {/* <FloatingAlertData /> */}
    </>
  );
}
