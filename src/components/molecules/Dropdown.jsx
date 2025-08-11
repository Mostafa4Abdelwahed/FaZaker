"use client";
import { Icon } from "@iconify/react";
import Button from "../atoms/Button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

function Dropdown({ children, className = "", size = "" }) {
  const [active, setActive] = useState(false);
  return (
    <div className={`relative mt-20 ${size}`}>
      <Button
        onClick={() => setActive(!active)}
        className="text-base mx-auto mt-3 !py-2 !px-4 w-full flex items-center justify-between gap-3"
        type="outline"
      >
        تغيير القارء{" "}
        <Icon icon={"solar:square-alt-arrow-down-linear"} className="text-xl" />
      </Button>
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
            exit={{ opacity: 0, height: 0, marginTop: 0, padding: 0 }}
            className={`absolute right-0 top-12 z-50 bg-white shadow-lg rounded-lg mx-auto w-full ${className}`}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Dropdown;
