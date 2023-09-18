import Container from "./Container"
import logo from "../../../img/logo.png"
import Navigation from "./Navigation"

function Header() {
  return (
    <header className='w-full bg-black-400 h-24 flex items-center relative'>
      <Container className="justify-between flex">
        <img src={logo} alt="Bridaga intercultural" />
        <Navigation />
      </Container>
    </header>
  )
}

export default Header