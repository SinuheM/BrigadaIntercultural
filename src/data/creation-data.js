import { _2016 } from "./creation_data_year/2016"
import { _2017 } from "./creation_data_year/2017"
import { _2018 } from "./creation_data_year/2018"
import { _2019 } from "./creation_data_year/2019"
import { _2020 } from "./creation_data_year/2020"
import { _2021 } from "./creation_data_year/2021"
import { _2022 } from "./creation_data_year/2022"

export const creationData = {
  conceptual_base: [
    {
      title: 'Mi cultura: ',
      description: 'Desde el fortalecimiento de mi identidad cultural, reconociendo mis orígenes diversos, definiendo quién soy en este espacio-tiempo y dialogando sobre quién quiero ser en el futuro, así como las maneras en que incorporo la mirada intercultural en mi vida.'
    },
    {
      title: 'Nuestras culturas: ',
      description: 'Desde el reconocimiento positivo de la diversidad cultural bajo una mirada reflexiva y crítica, dialogando sobre los paradigmas y las actitudes que tenemos frente a ella, pero también evidenciando la existencia de la discriminación y las desigualdades.'
    },
    {
      title: 'Lo intercultural: ',
      description: 'Desde la promoción del diálogo y la comunicación intercultural para la consolidación de una ciudadanía intercultural que reconozca nuestras diversidades, así como los derechos culturales de todas y todos.'
    }
  ],
  creative_process: [
    {
      description: 'Formación sensibilizante (teórico-práctica)'
    },
    {
      description: 'Reflexión creadora (introspectiva-artística)'
    },
    {
      description: 'Acción comunitaria (ciudadana-participativa)'
    }
  ],
  experiences: [
    {
      ..._2016,
    },
    {
      ..._2017,
    },
    {
      ..._2018
    },
    {
      ..._2019
    },
    {
      ..._2020
    },
    {
      ..._2021
    },
    {
      ..._2022
    }
  ]
}