import ArtHeader from '../art/ArtHeader'
import ImageSection from '../art/ImageSection'
import SubHero from '../base/SubHero'
import Layout from '../layout/Layout'
import { artData } from '../../data/art-data'

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
          />
        ))
      }
    </Layout>
  )
}

export default Art