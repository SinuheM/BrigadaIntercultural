import Container from '../layout/Container'
import SectionTitle from '../base/SectionTitle'

function Header() {
  return (
    <Container className="pt-14">
      <SectionTitle el="h1">NUESTRO ARTE</SectionTitle>
      <p className='py-8'>Desde 2016, reconocemos el potencial del arte y la cultura para la lucha contra la discriminación étnico-racial en la escuela, acompáñanos y (re)conoce lo que creamos en estos años:</p>
    </Container>
  )
}

export default Header