import clsx from "clsx";
import { useState } from "react";

const Accordion = ({ header, body, id }) => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        className="w-full p-4 border-b-0.5 border-solid border-cyan-350 flex items-center hover:bg-slate-50 transition-colors duration-500"
        aria-expanded={open}
        id={id}
        aria-controls={"accordion_sect_" + id}
        onClick={() => setOpen(!open)}
      >
        <div className={clsx('transition-transform duration-500 mr-2', open && 'transform rotate-90')}>
          <svg data-accordion-icon className="w-3 h-3 rotate-90" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
          </svg>
        </div>
        {header}
      </button>
      <div
        className={clsx("overflow-hidden bg-slate-100", open ? "h-auto py-4 p-8" : "h-0")}
        role="region"
        id={"accordion_sect_" + id}
        aria-labelledby={id}
      >
        {body}
      </div>
    </div>
  );
};

export default Accordion;
