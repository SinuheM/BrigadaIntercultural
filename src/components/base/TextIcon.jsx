import clsx from "clsx"

const kind = {
  circle: 'bg-cyan-350 rounded-full w-12 h-12 flex items-center justify-center text-slate-50'
}

function TextIcon({children, className, type}) {
  if (type === 'triangle') {
    return (
      <div className={clsx("mt-11 text-center", className)}>
        <i className="w-0 h-0 -bottom-12 border-t-[2.7rem] border-r-[1.7rem] border-l-[1.7rem] border-solid border-t-cyan-350 border-r-transparent border-l-transparent"></i>
        <p className={clsx("leading-8 tracking-body text-slate-50 -mt-16")}>{children}</p>
      </div>
    )
  }
  
  if (type === 'diamond') {
    return (
      <div className={clsx("relative text-center", className)}>
        <i className="w-9 h-9 mt-2 inline-block border-2 border-solid border-cyan-350 rotate-45"></i>
        <p className={clsx("leading-8 tracking-body text-cyan-350 -mt-10")}>{children}</p>
      </div>
    )
  }

  return (
    <p className={clsx("leading-8 tracking-body", kind[type], className)}>{children}</p>
  )
}

export default TextIcon