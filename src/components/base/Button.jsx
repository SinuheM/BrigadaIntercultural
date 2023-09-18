import clsx from "clsx"

const colorStyle = {
  primary: "bg-yellow-350 hover:bg-yellow-400 transition-[background-color]"
}

const marginStyle = {
  normal: "px-6",
  big: "px-10"
}

function Button({ el = "button", children, type, marginType = 'normal', className }) {
  const El = el
  return (
    <El className={clsx("py-3 rounded-lg text-sm duration-500", colorStyle[type], marginStyle[marginType], className)}>{children}</El>
  )
}

export default Button