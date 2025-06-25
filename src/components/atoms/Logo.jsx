import Image from 'next/image'

function Logo({ className="" }) {
    return (
        <div className="w-[105px]">
            <Image src={"/logo.svg"} className={`w-26 rounded-2xl bg-main px-5 py-3 ${className}`} width={"100"} height={"100"} alt="Logo" />
        </div>
    )
}

export default Logo
