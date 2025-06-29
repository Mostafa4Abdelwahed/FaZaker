"use client"
import { Icon } from "@iconify/react"
import Container from "../atoms/Container"
import Logo from "../atoms/Logo"
import NavbarLinks from "../molecules/NavbarLinks"
import SearchBox from "../molecules/SearchBox"
import { useState } from "react"
import Sidebar from "./Sidebar"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Container className="my-4">
                <div className="flex items-center justify-between gap-16 bg-white rounded-2xl border border-gray-200/70 p-3">
                    <Logo />
                    <NavbarLinks isOpen={isOpen} setIsOpen={setIsOpen} />
                    <SearchBox />
                    <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                    <button onClick={() => { setIsOpen(true) }} className="block lg:hidden cursor-pointer">
                        <Icon icon={"iconamoon:menu-burger-horizontal-bold"} className="text-3xl mx-3" />
                    </button>
                </div>
            </Container>
        </>
    )
}

export default Navbar
