import Sidebar from "@/components/organisms/DashboardSidebar";
import Header from "@/components/organisms/Header";

export const metadata = {
  title: "Admin Dashboard",
};

export default function DashboardRootLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-dark/90">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={"Admin Panel"} />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
