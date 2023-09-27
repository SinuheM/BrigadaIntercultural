import { Helmet } from 'react-helmet';
import ArtHeader from "../art/ArtHeader";
import ImageSection from "../art/ImageSection";
import SubHero from "../base/SubHero";
import Layout from "../layout/Layout";
import { artData, artData2023 } from "../../data/art-data";
import { Note } from "../base/Note";

function Art() {
  return (
    <Layout>
      <Helmet>
        <title>Arte | Brigada intercultural</title>
      </Helmet>
      <SubHero type="art">
        Arte reivindicativo y de resistencia intercultural que moviliza
        conciencias frente a la discriminación en la escuela.
      </SubHero>
      <ArtHeader
        title="NUESTRO ARTE"
        content="Desde 2016, reconocemos el potencial del arte y la cultura para la lucha contra la discriminación étnico-racial en la escuela, acompáñanos y (re)conoce lo que creamos en estos años:"
      />
      {artData.map((info, index) => (
        <ImageSection
          key={"art_info_" + index}
          title={info.year}
          detail={
            <p>
              <strong>{info.title}</strong>
              <br />
              <span>{info.subtitle}</span>
            </p>
          }
          images={info.images}
          videos={info.videos}
          hideImages={info.hideImages}
          description={info.detail}
          yearDetail={info.yearDetail}
          buttonText={info.buttonText}
        />
      ))}
      <ArtHeader
        title="NUESTRO 2023"
        content="Este año, lanzaremos nuestra convocatoria nacional y, en los primeros meses, desarrollaremos un programa piloto virtual con voluntarios/as jóvenes de Junín, Cusco y Arequipa."
      />
      {artData2023.map((info, index) => (
        <ImageSection
          key={"art_info_" + index}
          detail={
            <p>
              <strong>{info.title}</strong>
              <br />
              <span>{info.subtitle}</span>
            </p>
          }
          images={info.images}
          videos={info.videos}
          hideImages={info.hideImages}
          description={info.detail}
          buttonText={info.buttonText}
          yearNote={
            <Note>
              Si quieres crear junto a{" "}
              <span aria-label="nosotros y nosotras">nosotrxs</span>, escríbenos a{" "}
              <a
                className="text-blue-900"
                href="mailto:brigada.intercultural@gmail.com"
              >
                brigada.intercultural@gmail.com
              </a>
              , ¡muy pronto lanzaremos nuestra convocatoria!
            </Note>
          }
        />
      ))}
    </Layout>
  );
}

export default Art;
