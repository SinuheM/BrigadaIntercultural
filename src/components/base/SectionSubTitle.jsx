import clsx from "clsx"

function SectionSubTitle({children, className}) {
  return (
    <h4 className={clsx("text-lg uppercase", className)}>{children}</h4>
  )
}

export default SectionSubTitle