import SidebarLink from "../molecules/SidebarLink";

const menuItems = [
  { label: "Home", href: "/dashboard", icon: "mdi:house" },
  { label: "Categories", href: "/dashboard/categories", icon: "mdi:folder" },
  { label: "Podcasts", href: "/dashboard/podcasts", icon: "mdi:video" },
  { label: "Sermon", href: "/dashboard/sermon", icon: "fa:book" },
  { label: "charity", href: "/dashboard/charity", icon: "mdi:charity" },
  { label: "Settings", href: "/dashboard/settings", icon: "mdi:cog" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-dark shadow-md">
      <div className="p-4 text-lg font-bold text-main border-b">Admin Panel</div>
      <nav className="p-4 flex flex-col gap-4">
        {menuItems.map((item) => (
          <SidebarLink key={item.href} {...item} />
        ))}
      </nav>
    </aside>
  );
}
