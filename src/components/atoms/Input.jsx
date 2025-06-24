
function Input({ type = "", placeholder = "", className="" }) {
    return (
        <input type={type} placeholder={placeholder} className={`focus:outline-0 focus:border-0 rounded-2xl text-white placeholder-white bg-dark font-medium py-3.5 px-4 ${className}`} />
    )
}

export default Input
