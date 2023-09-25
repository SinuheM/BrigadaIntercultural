import { creationData } from "../../data/creation-data";
import ArtHeader from "../art/ArtHeader";
import Container from "../layout/Container";

const CreativeProcess = () => {
  return (
    <Container>
      <ArtHeader
        className="pl-0 md:w-4/5 ml-0"
        el="div"
        titleEl="h2"
        title="PROCESO CREATIVO"
        content="Nuestros conocimientos y experiencias nos motivan, pero nuestro proceso de creación artística e intercultural guía nuestro accionar a través de:"
      />
      <ul className="md:w-4/5 list-disc ml-5">
        {creationData.creative_process.map((data, index) => (
          <li key={'conceptual_'+index} className="mb-3">
            {data.description}
          </li>
        ))}
      </ul>
    </Container>
  )
}

export default CreativeProcess