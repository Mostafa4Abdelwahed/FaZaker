import { NavLinks } from "@/lib/config"
import NavLink from "../atoms/NavLink"

function NavbarLinks() {
    return (
        <div className="hidden lg:flex items-center gap-16 lg:pl-5">
            {
                NavLinks.map((link, index) => (
                    <NavLink name={link.name} icon={link.icon} icon_bold={link.icon_bold} href={link.href} key={index} />
                ))
            }
        </div>
    )
}

export default NavbarLinks
