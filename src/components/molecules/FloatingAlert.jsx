"use client"
import { Icon } from "@iconify/react"
import { motion } from "motion/react"
import { useState } from "react";

function FloatingAlert({ icon = "", text = "", className = "" }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`flex items-center justify-end group overflow-hidden gap-2.5 ${className}`}>
            <motion.div
                animate={isHovered ? { opacity: 1, x: 0, visibility: "block" } : { opacity: 0, x: -100, display: "none" }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-300/75 text-main text-xs lg:text-base font-bold lg:py-2.5 lg:px-4 p-2.5 px-3.5 rounded-2xl">
                {text}
            </motion.div>
            <div className="bg-main cursor-pointer p-2.5 lg:p-3 rounded-full text-light text-base lg:text-2xl">
                <Icon icon={icon} />
            </div>
        </div>
    )
}

export default FloatingAlert