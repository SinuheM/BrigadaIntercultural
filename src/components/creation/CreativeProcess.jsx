import ArtHeader from "../art/ArtHeader";
import HowToIcons from "../base/HowToIcons";
import Container from "../layout/Container";

const CreativeProcess = () => {
  return (
    <div className="bg-gray-200 pb-16 pt-2">
      <Container>
        <ArtHeader
          className="pl-0 md:w-4/5 text-center"
          el="div"
          titleEl="h2"
          title="Proceso creativo"
          content="Nuestros conocimientos y experiencias nos motivan, pero nuestro proceso de creación artística e intercultural guía nuestro accionar a través de:"
          iconType="symbol_blue"
        />
        <div className="md:grid grid-cols-3 mt-8">
          <HowToIcons />
        </div>
      </Container>
    </div>
  )
}

export default CreativeProcess