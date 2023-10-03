const Indicator = ({ number, detail, el: El = 'div' }) => {
  return (
    <El className='border-cyan-350 border rounded-2xl flex items-center w-40 h-40 hover:bg-cyan-350 hover:text-slate-50 transition-colors duration-300'>
      <p className="p-4 mx-auto">
        <span className='text-3xl font-bold block mb-1'>{number}</span>
        {detail}
      </p>
    </El>
  )
}

export default Indicator