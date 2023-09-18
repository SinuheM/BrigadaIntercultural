import clsx from 'clsx'

function Solution({solution}) {
  return (
    <li className={clsx(solution.className, "bg-cover bg-no-repeat bg-center md:h-96 sm:h-64 h-48 rounded-2xl relative")}>
      <span className='inline-block text-left -rotate-90 origin-top-left absolute pt-4 -bottom-4 text-white w-max'>
        {solution.name}
      </span>
    </li>
  )
}

export default Solution