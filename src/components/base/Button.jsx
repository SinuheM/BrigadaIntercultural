import clsx from "clsx"

const colorStyle = {
  primary: "bg-yellow-350 hover:bg-yellow-400 transition-[background-color]",
  bordered: "border border-gray-700 hover:bg-slate-200 py-2 px-4"
}

const marginStyle = {
  small: "py-2 px-4",
  normal: "py-3 px-6",
  big: "py-3 px-10"
}

function Button({ el = "button", onClick, children, type, marginType = 'normal', className }) {
  const El = el
  return (
    <El onClick={onClick} className={clsx("rounded-lg text-sm duration-500", colorStyle[type], marginStyle[marginType], className)}>{children}</El>
  )
}

export default Button