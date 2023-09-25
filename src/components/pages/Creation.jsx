import SubHero from "../base/SubHero";
import ConceptualBase from "../creation/ConceptualBase";
import CreativeProcess from "../creation/CreativeProcess";
import Experience from "../creation/Experience";
import Layout from "../layout/Layout";

const Creation = () => {
  return (
    <Layout>
      <SubHero type="creation">
        Desarrollamos nuevas narrativas y creamos arte en torno a la construcción de una ciudadanía intercultural en la escuela.
      </SubHero>
      <ConceptualBase />
      <CreativeProcess />
      <Experience />
    </Layout>
  )
}

export default Creation