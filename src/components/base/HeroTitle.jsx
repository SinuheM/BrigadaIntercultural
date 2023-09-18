import clsx from "clsx"

function HeroTitle({children, className}) {
  return (
    <h2 className={clsx("text-4xl text-neutral-50 font-medium", className)}>{children}</h2>
  )
}

export default HeroTitle