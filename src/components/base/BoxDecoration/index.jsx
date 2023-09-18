import clsx from 'clsx';
import './style.css';

function BoxDecoration({children, backgroundColor}) {
  return (
    <div className="box-decoration pr-6 relative">
      <i className={clsx("box-decoration_yellow", backgroundColor)}></i>
      <i className="box-decoration_cyan"></i>
      <div className='rounded-2xl overflow-hidden z-10 relative'>
        {children}
      </div>
    </div>
  )
}

export default BoxDecoration
