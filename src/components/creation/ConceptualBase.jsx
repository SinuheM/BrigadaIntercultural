import { creationData } from "../../data/creation-data";
import ArtHeader from "../art/ArtHeader";
import Container from "../layout/Container";

const ConceptualBase = () => {
  return (
    <Container className="pb-14">
      <ArtHeader
        className="pl-0 md:w-4/5 ml-0"
        el="div"
        titleEl="h2"
        title="Base conceptual"
        content="Para comprender nuestra lucha y sumar corazones, dialogamos, interiorizamos conocimientos y compartimos experiencias relacionadas a:"
        iconType="symbol_yellow"
      />
      <ul className="md:w-4/5 list-disc ml-5">
        { creationData.conceptual_base.map((data, index) => (
          <li key={'conceptual_'+index} className="mb-3 leading-8">
            <strong>{data.title}</strong>
            {data.description}
          </li>
        )) }
      </ul>
    </Container>
  )
}

export default ConceptualBase