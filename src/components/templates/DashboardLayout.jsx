import Sidebar from "../organisms/DashboardSidebar";
import Header from "../organisms/Header";

export default function DashboardLayout({ children, title }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title={title} />
        <main className="p-6 flex-1">{children}</main>
      </div>
    </div>
  );
}
