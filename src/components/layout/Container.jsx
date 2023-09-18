import clsx from "clsx"

function Container({ children, className }) {
  return (
    <section className={clsx('max-w-full w-full md:max-w-6xl px-6 mx-auto box-border', className)}>{children}</section>
  )
}

export default Container