import { Helmet } from 'react-helmet';
import SubHero from "../base/SubHero";
import ConceptualBase from "../creation/ConceptualBase";
import CreativeProcess from "../creation/CreativeProcess";
import Experience from "../creation/Experience";
import Layout from "../layout/Layout";

const Creation = () => {
  return (
    <Layout>
      <Helmet>
        <title>Creación | Brigada intercultural</title>
      </Helmet>
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