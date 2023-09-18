import Decoration from '../base/Decoration'
import SectionTitle from '../base/SectionTitle'
import Text from '../base/Text'
import TextIcon from '../base/TextIcon'
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
        <div className='flex flex-row md:flex-col items-center'>
          <div className='w-20 text-center'>
            <TextIcon className="mb-3 ml-4" type="circle">1</TextIcon>  
          </div>
          <Text className="mb-4">Formación sensibilizante <br /> (teórico-práctica)</Text>  
        </div>
        <div className='flex flex-row md:flex-col mt-4 md:mt-0 items-center'>
          <div className="w-20 text-center">
            <TextIcon className="mb-3" type="diamond">2</TextIcon>  
          </div>
          <Text className="md:mb-4">Reflexión ciudadana <br /> (introspectiva-artística)</Text>  
        </div>
        <div className='flex flex-row md:flex-col mt-8 md:mt-0 overflow-hidden items-center'>
          <div className="w-20 text-center">
            <TextIcon className="mb-3" type="triangle">3</TextIcon>  
          </div>
          <Text className="mb-2 md:mb-4">Acción comunitaria <br /> (participativa)</Text>  
        </div>
      </div>
    </Container>
  )
}
