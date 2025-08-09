import DashboardLayout from "@/components/templates/DashboardLayout";

export const metadata = {
  title: "Admin Dashboard",
};

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <DashboardLayout title="Admin Panel">{children}</DashboardLayout>
      </body>
    </html>
  );
}
