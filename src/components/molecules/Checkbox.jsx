import { motion } from "motion/react"

function Checkbox({ status, setStatus }) {
    return (
        <div onClick={() => setStatus(!status)} className="flex items-center justify-between border-2 border-main rounded-xl font-semibold text-main p-2.5">
            <span>تفعيل الأشعارات</span>
            <div
                className={`w-14 h-8 flex items-center px-1 rounded-full cursor-pointer 
          ${status ? "bg-main justify-end" : "bg-dark justify-start"}`}
            >
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className="w-6 h-6 bg-white rounded-full shadow-md"
                />
            </div>
        </div>
    )
}

export default Checkbox
