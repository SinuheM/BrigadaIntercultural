import ArtHeader from '../art/ArtHeader'
import ImageSection from '../art/ImageSection'
import SubHero from '../base/SubHero'
import Layout from '../layout/Layout'
import { artData } from '../../data/art-data'
import { Note } from '../base/Note'
import Container from '../layout/Container'

function Art() {
  return (
    <Layout>
      <SubHero type="art">
        Arte reivindicativo y de resistencia intercultural que moviliza conciencias frente a la discriminación en la escuela.
      </SubHero>
      <ArtHeader />
      {
        artData.map((info, index) => (
          <ImageSection
            key={'art_info_'+index}
            title={info.year}
            detail={
              <p>
                <strong>{info.title}</strong>
                <br />
                <span>{info.subtitle}</span>
              </p>
            }
            images={info.images}
            videos={info.videos}
            hideImages={info.hideImages}
            description={info.detail}
            yearDetail={info.yearDetail}
          />
        ))
      }
      <Container className="mb-8">
        <Note>
          NOTA: Si quieres crear junto a {' '}
          <span aria-label='nosotros y nosotras'>nosotrxs</span>
          , escríbenos a {' '}
          <a className='text-blue-900' href="mailto:brigada.intercultural@gmail.com">brigada.intercultural@gmail.com</a>
          , ¡muy pronto lanzaremos nuestra convocatoria!
        </Note>
      </Container>
    </Layout>
  )
}

export default Art