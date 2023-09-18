import BoxDecoration from '../base/BoxDecoration'
import Button from '../base/Button'
import Decoration from '../base/Decoration'
import SectionTitle from '../base/SectionTitle'
import Text from '../base/Text'
import Container from '../layout/Container'
import impact from "../../../img/home/impact.png"

export default function Impact() {
  return (
    <div className="bg-gray-200">
      <Container className="py-16 flex flex-col-reverse md:flex-row items-center">
        <div className="md:w-1/2 mt-8 md:mt-0">
          <BoxDecoration backgroundColor="bg-gray-200">
            <img src={impact} alt="" />
          </BoxDecoration>
        </div>
        <div className='md:w-1/2 md:pl-8'>
          <Decoration type="symbol_yellow" />
          <SectionTitle className="mb-6 mt-4">Impactando en la vida</SectionTitle>
          <Text className="mb-4">Desde el 2016, hemos intervenido en 48 colegios, empoderando a más de 2000 estudiantes con el soporte de más de 700 voluntarios.</Text>
          <Text className="mb-4">¿Y tú también quieres ser un agente intercultural?</Text>
          <Button type="primary" marginType="big" className="px-10">ÚNETE</Button> 
        </div>
      </Container>
    </div>
  )
}
