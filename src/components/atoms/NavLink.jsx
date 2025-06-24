import { Icon } from "@iconify/react"

function NavLink({ name, icon, icon_bold, isActive }) {
    return (
        <div className="flex flex-col gap-1 justify-center items-center cursor-pointer">
            {
                isActive ?
                    <Icon icon={icon_bold} fontSize={24} className="text-main" />
                    :
                    <Icon icon={icon} fontSize={24} className="text-light-200" />
            }
            <span aria-checked={isActive} className="text-light-200 text-center aria-checked:text-main font-medium text-sm">{name}</span>
        </div>
    )
}

export default NavLink
