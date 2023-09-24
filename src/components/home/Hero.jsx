import Button from "../base/Button"
import HeroTitle from "../base/HeroTitle"
import Container from "../layout/Container"
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="md:py-36 py-20 bg-hero-home bg-center bg-no-repeat bg-cover text-center">
      <Container>
        <HeroTitle className="mb-4 md:px-40 px-10 leading-snug">
          Arte y cultura para la lucha contra la discriminación étnico-racial en la escuela
        </HeroTitle>
        <Button el={Link} to={"/arte"} type="primary">NUESTRO ARTE</Button> 
      </Container>
    </div>
  )
}

export default Hero