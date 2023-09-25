import Container from '../layout/Container'
import SectionTitle from '../base/SectionTitle'

function ArtHeader({ title, content }) {
  return (
    <Container className="pt-14">
      <SectionTitle el="h1">{title}</SectionTitle>
      <p className='py-8'>{content}</p>
    </Container>
  )
}

export default ArtHeader