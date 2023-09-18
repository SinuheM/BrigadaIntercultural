import { useState } from "react"

const navLinks = [
  { text: 'Arte', style: 'normal', to: 'arte.html' },
  { text: 'Creación', style: 'normal', to: 'creacion.html' },
  { text: 'Impacto', style: 'normal', to: 'impacto.html' },
  { text: 'Únete', style: 'primary', to: 'unete.html' }
]

const navStyle = {
  normal: "text-neutral-50 opacity-80 hover:text-neutral-100 hover:opacity-100 px-2 mx-2",
  primary: "text-cyan-350 border-cyan-350 border-solid border rounded-lg px-4 py-2 mx-2"
}

function Navigation() {
  const [heightMobile, setHeightMobile] = useState(0)
  const handleToggle = () => {
    setHeightMobile(heightMobile === 0 ? 200 : 0)
  }
  return (
    <>
      <nav className="md:flex hidden items-center">
        <NavigationDesktop navLinks={navLinks} />
      </nav>
      <button aria-label="Menú" onClick={handleToggle} className="px-3 border-0.5 hover:border-slate-400 duration-500 border-transparent rounded md:hidden">
        <i className="w-6 h-0.5 bg-slate-400 block" />
        <i className="w-6 h-0.5 bg-slate-400 block my-1.5"/>
        <i className="w-6 h-0.5 bg-slate-400 block"/>
      </button>
      <div className="absolute top-24 left-0 bg-slate-50 w-full">
        <NavigationMobile navLinks={navLinks} height={heightMobile} />
      </div>
    </>
  )
}

const NavigationMobile = ({navLinks, height}) => (
  <ul className="flex flex-col overflow-hidden duration-500 transition-[height] drop-shadow-md" style={{ height }}>
    {
      navLinks.map((link, key) => (
        <li key={'link_' + key}>
          <a
            href=""
            className="py-3 pl-4 my-px w-full hover:text-gray-900 inline-block hover:bg-slate-200"
          >
            {link.text}
          </a>
        </li>
      ))
    }
  </ul>
)

const NavigationDesktop = ({navLinks}) => (
  <ul className="flex">
    {
      navLinks.map((link, key) => (
        <li key={'link_' + key}>
          <a
            href={link.to}
            className={navStyle[link.style]}
          >
            {link.text}
          </a>
        </li>
      ))
    }
  </ul>
)

export default Navigation