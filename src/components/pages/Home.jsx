import Challenge from '../home/Challenge'
import Hero from '../home/Hero'
import HowTo from '../home/HowTo'
import Impact from '../home/Impact'
import OurSolution from '../home/OurSolution'
import Sponsors from '../home/Sponsors'
import Layout from '../layout/Layout'

function Home() {
  return (
    <Layout>
      <Hero />
      <Challenge />
      <OurSolution />
      <HowTo />
      <Impact />
      <Sponsors />
    </Layout>
  )
}

export default Home