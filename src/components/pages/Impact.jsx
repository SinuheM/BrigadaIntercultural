import { Helmet } from 'react-helmet';
import SubHero from "../base/SubHero";
import Layout from "../layout/Layout";

const Impact = () => {
  return (
    <Layout>
      <Helmet>
        <title>Impacto | Brigada intercultural</title>
      </Helmet>
      <SubHero type="impact">
        Las y los jóvenes estamos llamados a velar por nuestra diversidad cultural, (re)conócenos…
      </SubHero>
    </Layout>
  )
}

export default Impact