import Container from '../layout/Container'
import SectionSubTitle from '../base/SectionSubTitle'
import logoSemilla from "../../../img/home/logo-semilla.png"
import logoIFY from "../../../img/home/logo-ify.png"
import logoBrigada from "../../../img/home/logo-brigada.png"
import logoDrej from "../../../img/home/logo-drej.png"
import logoDdcJunin from "../../../img/home/logo-ddcjun.png"
import logoUc from "../../../img/home/logo-uc.png"
import logoUncp from "../../../img/home/logo-uncp.png"

function Sponsors() {
  return (
    <div className="bg-white">
      <Container className="py-16 text-center">
        <SectionSubTitle>Impulsado por</SectionSubTitle>
        <a href="https://www.facebook.com/SemillaIntercultural" className='inline-block mt-4 mb-8'>
          <img src={logoSemilla} alt="Semilla intercultural" className='h-16' />
        </a>
        <SectionSubTitle>Financiado por</SectionSubTitle>
        <div className='mt-4 mb-8 flex flex-col md:flex-row justify-around items-center'>
          <a href="https://iyfglobal.org/" className='inline-block md:ml-12 -ml-20 mb-6 md:mb-0'>
            <img src={logoIFY} alt="International Youth Foundation" className='h-20' />
          </a>
          <a href="https://estimuloseconomicos.cultura.gob.pe/2022" className='inline-block md:mr-12'>
            <img src={logoBrigada} alt="ESTÍMULOS ECONÓMICOS PARA LA CULTURA 2022" className='h-20' />
          </a>
        </div>
        <SectionSubTitle>Con el apoyo de</SectionSubTitle>
        <div className='my-4 flex flex-col md:flex-row justify-around items-center'>
          <a href="https://uncp.edu.pe/" className='inline-block mb-6 md:mb-0'>
            <img src={logoUncp} alt="Universidad Nacional del Centro del Perú" className='h-16' />
          </a>
          <a href="https://ucontinental.edu.pe/" className='inline-block'>
            <img src={logoUc} alt="Universidad Continental" className='h-12' />
          </a>
        </div>
        <div className='flex flex-col md:flex-row justify-around items-center'>
          <a href="https://drej.edu.pe/" className='inline-block mb-6 md:mb-0'>
            <img src={logoDrej} alt="Dirección Regional de Educación Junin" className='h-14' />
          </a>
          <a href="https://ddcjunin.wordpress.com/" className='inline-block'>
            <img src={logoDdcJunin} alt="Dirección Desconcentrada de Cultura de Junin" className='h-14' />
          </a>
        </div>
      </Container>
    </div>
  )
}

export default Sponsors