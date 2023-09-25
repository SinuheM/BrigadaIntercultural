import Container from '../layout/Container'
import SectionTitle from '../base/SectionTitle'
import clsx from 'clsx'

function ArtHeader({ title, content, className, el = 'section', titleEl = 'h1'  }) {
  return (
    <Container className={clsx("pt-14", className)} el={el}>
      <SectionTitle el={titleEl}>{title}</SectionTitle>
      <p className='py-8 leading-8'>{content}</p>
    </Container>
  )
}

export default ArtHeader