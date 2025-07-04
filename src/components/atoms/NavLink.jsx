"use client"
import { Icon } from "@iconify/react"
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ name, icon, icon_bold, href }) {
    const pathname = usePathname();
    return (
        <Link href={href} className="flex flex-col gap-1 justify-center items-center cursor-pointer">
            {
                pathname === href ?
                    <Icon icon={icon_bold} fontSize={24} className="text-main" />
                    :
                    <Icon icon={icon} fontSize={24} className="text-light-200" />
            }
            <span aria-checked={pathname === href} className="text-light-200 text-center aria-checked:text-main font-medium text-sm">{name}</span>
        </Link>
    )
}

export default NavLink
