import Decoration from '../base/Decoration'
import SectionTitle from '../base/SectionTitle'
import Solution from '../base/Solution'
import Text from '../base/Text'
import Container from '../layout/Container'

const solutionList = [
  {name: "Historieta", className: "bg-solution-1" },
  {name: "Fotografía", className: "bg-solution-2" },
  {name: "Mural-collage", className: "bg-solution-3" },
  {name: "Burilado", className: "bg-solution-4" },
  {name: "Podcast", className: "bg-solution-5" },
  {name: "Stop-motion", className: "bg-solution-6" },
  {name: "Máscaras", className: "bg-solution-7" }
]

function OurSolution() {
  return (
    <div className='bg-gray-200 py-16'>
      <Container>
        <div className='md:w-3/4'>
          <Decoration type="symbol_yellow" />
          <SectionTitle className="mb-6 mt-4">Y también una solución</SectionTitle>
          <Text className="mb-4">Empoderamos a las y los estudiantes de secundaria de las instituciones educativas de Junín como agentes interculturales que empleen el arte y la cultura para evidenciar, sensibilizar y hacerle frente a la discriminación, el bullying y la violencia escolar con base étnico-racial. </Text>
        </div>
        <ul className='grid md:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-4'>
          {solutionList.map((solution, index) => (
            <Solution key={"sol_"+index} solution={solution} />
          ))}
        </ul>
      </Container>
    </div>
  )
}

export default OurSolution