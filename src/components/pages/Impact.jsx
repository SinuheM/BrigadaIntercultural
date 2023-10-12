import { Helmet } from 'react-helmet';
import SubHero from "../base/SubHero";
import Layout from "../layout/Layout";
import Benefit from '../impact/Benefit';
import { Recognition } from '../impact/Recognition';
import Map from '../impact/Map';

const Impact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Impacto | Brigada intercultural</title>
      </Helmet>
      <SubHero type="impact">
        La adquisición de competencias interculturales nos empodera y convierte en terreno fértil para la consolidación de una convivencia saludable en la escuela
      </SubHero>
      <Benefit />
      <Map />
      <Recognition />
    </Layout>
  )
}

export default Impact