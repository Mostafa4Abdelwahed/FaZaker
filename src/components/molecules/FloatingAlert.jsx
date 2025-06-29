import { Icon } from "@iconify/react"

function FloatingAlert({ icon="", text="", className="" }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <div className="bg-main p-3 rounded-full text-light text-base lg:text-3xl">
                <Icon icon={icon} />
            </div>
            <div className="bg-white border border-gray-300/75 text-main text-xs lg:text-base font-bold lg:py-3 lg:px-4 p-2.5 rounded-2xl">
                {text}
            </div>
        </div>
    )
}

export default FloatingAlert
