import { Icon } from "@iconify/react"

function FloatingAlert({ icon="", text="", className="" }) {
    return (
        <div className={`flex items-center gap-2.5 ${className}`}>
            <div className="bg-main p-3 rounded-full text-light text-3xl">
                <Icon icon={icon} />
            </div>
            <div className="bg-white border border-gray-300/75 text-main text-base font-bold py-3 px-4 rounded-2xl">
                {text}
            </div>
        </div>
    )
}

export default FloatingAlert
