import Decoration from "../base/Decoration";
import Indicator from "../base/Indicator";
import SectionTitle from "../base/SectionTitle";
import Container from "../layout/Container";

const statistics = [
  { id: 1, number: ">2000", detail: "estudiantes" },
  { id: 2, number: ">700", detail: "jóvenes voluntarios" },
  { id: 3, number: ">150", detail: "docentes y padres de familia" },
  { id: 4, number: "37", detail: "colegios en Junín" },
  { id: 5, number: "48", detail: "colegios en Perú" },
];

const Benefit = () => {
  return (
    <Container className="py-16 flex flex-col md:flex-row justify-between items-baseline">
      <div className="md:w-1/2">
        <Decoration type="symbol_blue" className="inline-block" />
        <SectionTitle el="h2" className="text-2.5xl mb-2">
          Beneficiarios
        </SectionTitle>
        <p className="py-8 leading-8">
          Creemos que las y los adolescentes tienen el potencial para impactar
          en sus colegios, desde el arte, la cultura y la adquisición de
          competencias interculturales, junto a actores sociales de su propio
          entorno como las y los voluntarios jóvenes, sus padres y madres de
          familia, así como sus docentes. Conoce cuántos son…
        </p>
      </div>
      <ul className="md:w-1/2 flex gap-5 flex-wrap items-center justify-center text-center">
        {statistics.map((statistic) => (
          <Indicator
            el="li"
            key={statistic.id}
            number={statistic.number}
            detail={statistic.detail}
          />
        ))}
      </ul>
    </Container>
  );
};

export default Benefit;
