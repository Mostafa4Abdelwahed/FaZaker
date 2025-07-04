
function Button({ children, className="" , ...props }) {
  return (
    <button className={`bg-main text-white cursor-pointer rounded-xl py-2.5 px-7 ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
