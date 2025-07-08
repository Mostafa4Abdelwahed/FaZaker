"use client"
import { NavLinks } from "@/lib/config"
import { Icon } from "@iconify/react"
import Link from "next/link"
import { usePathname } from "next/navigation";

function Sidebar({ isOpen, setIsOpen }) {
    const pathname = usePathname();
    return (
        <>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="block lg:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-[51] transition-opacity duration-300"
                />
            )}
            <div
                className={`block lg:hidden fixed top-0 left-0 h-full py-4 w-64 bg-white shadow-lg z-[52] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-500 flex items-center text-xl pl-5 justify-end cursor-pointer px-4 w-full mr-auto"
                >
                    <Icon icon={"mingcute:close-fill"} />
                </button>
                <ul className="px-2.5 space-y-2 mt-3.5">
                    {
                        NavLinks.map((link, index) => (
                            <Link aria-checked={pathname === link.href} href={link.href} onClick={() => setIsOpen(false)} key={index} className="flex items-center gap-2 text-lg p-2 rounded aria-checked:text-main">
                                <Icon icon={pathname === link.href ? link.icon_bold : link.icon} />
                                {link.name}
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar
