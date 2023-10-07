import Decoration from '../base/Decoration'
import HowToIcons from '../base/HowToIcons'
import SectionTitle from '../base/SectionTitle'
import Text from '../base/Text'
import Container from '../layout/Container'

export default function HowTo() {
  return (
    <Container className="py-16 md:text-center">
      <div className='md:w-1/2 mx-auto'>
        <Decoration type="symbol_blue" className="inline-block" />
        <SectionTitle className="mb-6 mt-4">¿Cómo lo hacemos posible?</SectionTitle>
        <Text className="mb-4">A través de un modelo de Educación Ciudadana Intercultural Artistica que posibilita el reconocimiento positivo de la diversidad cultural.</Text>
      </div>
      <div className="md:grid grid-cols-3 mt-8">
        <HowToIcons />
      </div>
    </Container>
  )
}
