
function Button({ children, className="" , type="", ActionType="button", ...props }) {
  return (
    <button type={ActionType} aria-checked={type === "outline"} className={`bg-main border border-transparent aria-checked:border-main aria-checked:bg-transparent aria-checked:hover:bg-main-100 aria-checked:hover:border-main-100 aria-checked:hover:text-white hover:bg-main-100 transition-all aria-checked:text-main text-white cursor-pointer rounded-xl py-2.5 px-7 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
