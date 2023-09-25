import clsx from 'clsx'
import Container from '../layout/Container'

const backgroundByType = {
  art: 'bg-art',
  creation: 'bg-creation',
  impact: 'bg-impact'
}

function SubHero({ type, children }) {
  return (
    <div className={clsx('py-20 text-center bg-center bg-no-repeat bg-cover', backgroundByType[type])}>
      <Container>
        <p className='text-2xl px-12 text-gray-100 leading-relaxed'>{children}</p>
      </Container>
    </div>
  )
}

export default SubHero