import clsx from "clsx"

function SectionTitle({children, className, el: El = 'h3'}) {
  return (
    <El className={clsx("text-2.5xl tracking-header", className)}>{children}</El>
  )
}

export default SectionTitle