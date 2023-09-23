import Container from "./Container"
import logo from "../../../img/logo.png"
import Navigation from "./Navigation"
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className='w-full bg-black-400 h-24 flex items-center relative'>
      <Container className="justify-between flex">
        <Link to="/">
          <h1>
            <img src={logo} alt="Bridaga intercultural" />
          </h1>
        </Link>
        <Navigation />
      </Container>
    </header>
  )
}

export default Header