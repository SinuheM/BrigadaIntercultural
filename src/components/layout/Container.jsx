import clsx from "clsx"

function Container({ children, className, el:El = 'section' }) {
  return (
    <El className={clsx('max-w-full w-full md:max-w-6xl px-6 mx-auto box-border', className)}>{children}</El>
  )
}

export default Container