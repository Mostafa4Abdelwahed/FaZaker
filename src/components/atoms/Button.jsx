
function Button({ children, className="" , type="", ...props }) {
  return (
    <button aria-checked={type === "outline"} className={`bg-main border border-transparent aria-checked:border-main aria-checked:bg-transparent hover:bg-main-100 transition-all aria-checked:text-main text-white cursor-pointer rounded-xl py-2.5 px-7 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
