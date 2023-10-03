import { Helmet } from 'react-helmet';
import SubHero from "../base/SubHero";
import Layout from "../layout/Layout";
import Benefit from '../impact/Benefit';
import { Recognition } from '../impact/Recognition';

const Impact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Impacto | Brigada intercultural</title>
      </Helmet>
      <SubHero type="impact">
        Las y los jóvenes estamos llamados a velar por nuestra diversidad cultural, (re)conócenos…
      </SubHero>
      <Benefit />
      <Recognition />
    </Layout>
  )
}

export default Impact