import { Icon } from "@iconify/react"

function FloatingAlert({ icon="", text="", className="" }) {
    return (
        <div className={`flex items-center group gap-2.5 ${className}`}>
            <div className="bg-main cursor-pointer p-2.5 lg:p-3 rounded-full text-light text-base lg:text-2xl">
                <Icon icon={icon} />
            </div>
            <div className="bg-white hidden opacity-0 transition-opacity group-hover:block group-hover:opacity-100 border border-gray-300/75 text-main text-xs lg:text-base font-bold lg:py-3 lg:px-4 p-2.5 px-3.5 rounded-2xl">
                {text}
            </div>
        </div>
    )
}

export default FloatingAlert
