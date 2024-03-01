import {
  Container,
  Overlay,
  Sponsers,
  Sponsor,
  Us,
  WhatIs,
  Events,
  Title,
  Column,
  LargerImg,
  SmallerImg,
  Display,
  UnderImage,
} from "./Styles";

import { Button } from "../../components";

import {
  mapa,
  secretaria,
  casaTueTimba,
  cidade,
  festa,
  prefeitura,
  governo,
  fotoFundo,
} from "../../assets/index";

export default function Home() {
  return (
    <Container>
      <Display>
        <Overlay>
          <UnderImage src={fotoFundo} alt="Banner sobre a cidade"></UnderImage>
        </Overlay>
        <Sponsers>
          <Sponsor src={prefeitura} alt="Logo da prefeitura"></Sponsor>
          <Sponsor src={secretaria} alt="Logo da secretaria de cultura "></Sponsor>
          <Sponsor src={casaTueTimba} alt="Logo da instituição Casa Tue Timba"></Sponsor>
          <Sponsor src={governo} alt="Logo do Governo Federal"></Sponsor>
        </Sponsers>
      </Display>
      <div>
        <Us>
          <Column>
            <Title>Quem somos</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt, explicabo.
            </p>
            <LargerImg src={mapa} alt="Painel com diversas impressões digitais"></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
          <Column>
            <SmallerImg src={mapa} alt="Painel com diversas impressões digitais"></SmallerImg>
          </Column>
        </Us>

        <WhatIs>
          <Column>
            <SmallerImg src={cidade} alt="Foto representando a cidade de Bom Despacho"></SmallerImg>
          </Column>
          <Column>
            <Title>O que é o acervo?</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt, explicabo.
            </p>
            <LargerImg src={cidade} alt="Foto representando a cidade de Bom Despacho"></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
        </WhatIs>

        <Events>
          <Column>
            <Title>Nosso eventos</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt, explicabo.
            </p>
            <LargerImg
              src={festa}
              alt="Foto representativa de uma das festas da cidade"
            ></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
          <Column>
            <SmallerImg
              src={festa}
              alt="Foto representativa de uma das festas da cidade"
            ></SmallerImg>
          </Column>
        </Events>
      </div>
    </Container>
  );
}
