"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconWrapper from "../atoms/IconWrapper";

export default function SidebarLink({ href, icon, label }) {
  const pathname = usePathname();
  const isActive = pathname.startsWith(href);

  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg ${
        isActive ? "bg-blue-500 text-white" : "text-gray-700 hover:bg-gray-100"
      }`}
    >
      <IconWrapper name={icon} className="text-xl" />
      {label}
    </Link>
  );
}
