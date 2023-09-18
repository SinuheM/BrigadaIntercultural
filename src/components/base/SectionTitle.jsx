import clsx from "clsx"

function SectionTitle({children, className}) {
  return (
    <h3 className={clsx("text-2.5xl tracking-header", className)}>{children}</h3>
  )
}

export default SectionTitle