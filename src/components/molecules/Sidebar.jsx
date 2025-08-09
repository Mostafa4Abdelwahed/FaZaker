import SidebarLink from "../molecules/SidebarLink";

const menuItems = [
  { label: "Categories", href: "/dashboard/categories", icon: "mdi:folder" },
  { label: "Podcasts", href: "/dashboard/podcasts", icon: "mdi:video" },
  { label: "Settings", href: "/dashboard/settings", icon: "mdi:cog" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4 text-lg font-bold border-b">Admin Panel</div>
      <nav className="p-4 space-y-2">
        {menuItems.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
