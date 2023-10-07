import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { mapPeruData } from '../../data/highcharts-pe'
import Container from '../layout/Container'
import HC_map from "highcharts/modules/map";
import SectionTitle from '../base/SectionTitle';
import Decoration from '../base/Decoration';

HC_map(Highcharts);

var data = [
  ["pe-ic", 1], // Ica
  ["pe-cs", 1], // Cusco
  // ["pe-am", 0], // Amazonas
  // ["pe-lo", 0], // Loreto
  ["pe-ay", 1], // Ayacucho
  // ["pe-145", 0], // Callao
  ["pe-hv", 1], // Huancavelica
  ["pe-ju", 1], // Junin
  ["pe-lr", 1], // Lima
  // ["pe-lb", 0], // Lambayeque
  // ["pe-tu", 0], // Tumbes
  // ["pe-ap", 0], // Apurimac
  ["pe-ar", 1], // Arequipa
  // ["pe-cl", 0], // Puno
  // ["pe-mq", 0], // Moquegua
  // ["pe-ta", 0], // Tacna
  // ["pe-hc", 0], // Huanuco
  // ["pe-3341", 0], // Callao
  // ["pe-ll", 0], // La libertad
  // ["pe-pa", 0], // Pasco
  // ["pe-pu", 0], // 
  // ["pe-pi", 0], // Piura
  // ['pe-uc', 2],
  // ['pe-md', 3],
  // ['pe-sm', 4],
  // ['pe-an', 19],
  // ['pe-cj', 20],
];

const impactOptions = {
  title: { text: "" },
  chart: { map: mapPeruData, backgroundColor: "rgb(229, 231, 235)", borderColor: "rgb(228, 189, 0)" },
  // chart: { map: mapPeruData, backgroundColor: "rgb(47, 176, 182)", borderColor: "rgb(228, 189, 0)" },
  subtitle: { text: "" },
  credits: { enabled: false },
  legend: { enabled: false },
  exporting: { buttons: { contextButton: { enabled: false } } },
  mapNavigation: { enabled: false },
  tooltip: { headerFormat: "", pointFormat: "{point.name}" },
  series: [
    {
      name: "",
      data,
      color: "rgb(228, 189, 0)",
      borderColor: "rgba(100, 100, 100, 0.5)"
    },
  ]
}

const regions = [
  'Junín',
  'Lima',
  'Ica',
  'Huancavelica',
  'Ayacucho',
  'Cusco',
  'Arequipa'
]

const Map = () => {
  return (
    <div className='bg-gray-200 py-10'>
      <Container className={'flex md:flex-row flex-col items-center justify-center py-4'}>
        <div className="md:pl-16 md:w-1/3">
          <Decoration type="symbol_yellow" className="inline-block" />
          <SectionTitle el='h2' className="text-2.5xl mb-2">Cifras</SectionTitle>
          <p className='text-xl'>Tuvimos presencia en 7 Regiones</p>
          <ul className='pt-3 pl-5 list-disc'>
            {
              regions.map((region, index) => (
                <li key={'reg_'+index}>{region}</li>
              ))
            }
          </ul>
        </div>
        <div className="md:w-1/3">
          <HighchartsReact
            highcharts={Highcharts}
            options={impactOptions}
            constructorType="mapChart"
          />
        </div>
      </Container>
    </div>
  )
}

export default Map