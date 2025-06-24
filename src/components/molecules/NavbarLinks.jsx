import NavLink from "../atoms/NavLink"

function NavbarLinks() {
    return (
        <div className="hidden lg:flex items-center gap-16 lg:pl-5">
            <NavLink name="بيتك" icon={"solar:home-smile-linear"} icon_bold={"solar:home-smile-bold"} isActive={true} />
            <NavLink name="أوقات الصلاة" icon={"solar:watch-round-linear"} icon_bold={"solar:watch-round-bold"} isActive={false} />
            <NavLink name="عن الدين" icon={"solar:clapperboard-text-linear"} icon_bold={"solar:clapperboard-text-bold"} isActive={false} />
            <NavLink name="المفضلة" icon={"solar:heart-angle-linear"} icon_bold={"solar:heart-angle-bold"} isActive={false} />
            <NavLink name="الأشعارات" icon={"solar:bell-linear"} icon_bold={"solar:bell-bold"} isActive={false} />
            <NavLink name="الأعدادات" icon={"solar:settings-minimalistic-linear"} icon_bold={"solar:settings-minimalistic-bold"} isActive={false} />
        </div>
    )
}

export default NavbarLinks
