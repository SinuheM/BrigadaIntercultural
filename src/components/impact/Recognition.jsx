import Container from '../layout/Container'
import SectionSubTitle from '../base/SectionSubTitle'
import logoEstimulos from "../../../img/impacto/reconocimiento/img_estimulos.png"
import logoGyrf from "../../../img/impacto/reconocimiento/img_gyrf.jpg"
import logoProceres from "../../../img/impacto/reconocimiento/img_proceres.jpg"
import logoProtagonistas from "../../../img/impacto/reconocimiento/img_protagonistas.jpg"


export const Recognition = () => {
  return (
    <div className="bg-white">
      <Container className="py-16 text-center">
        <SectionSubTitle>Reconocimientos</SectionSubTitle>
        <div className='mt-4 flex flex-col md:flex-row flex-wrap gap-8 justify-around items-center'>
          <div className='inline-block'>
            <img src={logoEstimulos} alt="PROYECTO GANADOR DE ESTÍMULOS ECONÓMICOS PARA LA CULTURA 2022" className='h-28' />
          </div>
          <div className='inline-block'>
            <img src={logoGyrf} alt="International Youth Foundation" className='h-28' />
          </div>
          <div className='inline-block'>
            <img src={logoProceres} alt="Proceres del bicentenario" className='h-28' />
          </div>
          <div className='inline-block'>
            <img src={logoProtagonistas} alt="Premio protagonistas del cambio - UPC" className='h-36' />
          </div>
        </div>
      </Container>
    </div>
  )
}
