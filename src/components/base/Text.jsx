import clsx from "clsx"

function Text({children, className}) {
  return (
    <p className={clsx("leading-8 tracking-body", className)}>{children}</p>
  )
}

export default Text