import BoxDecoration from '../base/BoxDecoration'
import Decoration from '../base/Decoration'
import Reference from '../base/Reference'
import SectionTitle from '../base/SectionTitle'
import Text from '../base/Text'
import Container from '../layout/Container'

export default function Challenge() {
  return (
    <Container className="py-16 flex flex-col md:flex-row">
      <div className='md:w-1/2 pr-5 mb-8'>
        <Decoration type="symbol_blue" />
        <SectionTitle className="mb-6 mt-4">Tenemos un desafío</SectionTitle>
        <Text className="mb-4">¿Sabías que la escuela pública es el 5° espacio donde se producen mayor cantidad de casos de discriminación étnico - racial en el Perú?</Text>
        <Reference>(1º Encuesta Nacional de Percepciones y Actitudes sobre diversidad cultural y discriminación étnico - racial, 2018)</Reference>
      </div>
      <div className="md:w-1/2">
        <BoxDecoration backgroundColor="bg-neutral-100">
          <iframe
            className='w-full'
            width="560" height="315" title="YouTube video player" frameBorder="0"
            src="https://www.youtube.com/embed/BJfVNGNlu3M?si=59td0E_d5UmSbuCr"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </BoxDecoration>
      </div>
    </Container>
  )
}
