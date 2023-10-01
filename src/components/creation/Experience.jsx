import { creationData } from "../../data/creation-data";
import ArtHeader from "../art/ArtHeader";
import Container from "../layout/Container";
import ExperienceDetail from "./ExperienceDetail";

const Experience = () => {
  return (
    <Container className="pb-12">
      <ArtHeader
        className="pl-0"
        el="div"
        titleEl="h2"
        title="EXPERIENCIA B.I."
        content="Desde 2016, hemos impulsado y acompañado procesos de producción artística de estudiantes del nivel secundaria junto a voluntarios/as jóvenes, generando experiencias valiosas de creación colectiva que puedes conocer hoy."
      />
      <ul className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {
          creationData.experiences.map((experience, index) => (
            <li key={'exp' + index}>
              <ExperienceDetail experience={experience} />
            </li>
          ))
        }
      </ul>
    </Container>
  )
}

export default Experience