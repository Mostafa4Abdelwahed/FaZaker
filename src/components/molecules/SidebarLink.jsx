"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconWrapper from "../atoms/IconWrapper";
import Button from "../atoms/Button";

export default function SidebarLink({ href, icon, label }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href}>
      <Button
        type={isActive ? "" : "outline"}
        className="flex items-center gap-3 w-full"
      >
        <IconWrapper name={icon} className="text-xl" />
        {label}
      </Button>
    </Link>
  );
}
