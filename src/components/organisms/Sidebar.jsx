import { NavLinks } from "@/lib/config"
import { Icon } from "@iconify/react"

function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="block lg:hidden fixed inset-0 bg-black/50 bg-opacity-50 z-40 transition-opacity duration-300"
                />
            )}
            <div
                className={`block lg:hidden fixed top-0 left-0 h-full py-4 w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
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
                            <li key={index} className="flex items-center gap-2 text-lg p-2 rounded">
                                <Icon icon={link.icon} />
                                {link.name}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default Sidebar
