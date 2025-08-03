"use client"
import { Icon } from "@iconify/react"
import { useState } from "react"
import { AnimatePresence, motion } from "motion/react";

function Accordion({ title = "", children, className="" }) {
    const [active, setActive] = useState(false);

    return (
        <div>
            <div onClick={() => setActive(!active)} className="flex items-center justify-between border-2 border-main rounded-xl font-semibold text-main p-2.5">
                <span>{title}</span>
                <Icon icon={"solar:square-alt-arrow-left-linear"} className="text-3xl" />
            </div>
            <AnimatePresence>
                {
                    active &&
                    <motion.div
                        initial={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
                        animate={{ opacity: 1, height: "auto", marginTop: 12, padding: 10 }}
                        exit={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
                        className={`bg-gray-50 text-main-100 font-semibold text-center text-xl shadow rounded-xl mt-3 ${className}`}>
                        {children}
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )
}

export default Accordion
