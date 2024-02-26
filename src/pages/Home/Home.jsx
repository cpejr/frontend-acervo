import {
  UnderImage,
  Container,
  Logo,
  Overlay,
  Sponsers,
  Sponsor,
  Curiosity,
  Us,
  WhatIs,
  Events,
  Button,
  Title,
  Column,
  LargerImg,
  SmallerImg,
} from "./Styles";

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
      <Overlay>
        <UnderImage src={fotoFundo}></UnderImage>
        <Logo></Logo>
      </Overlay>
      <Sponsers>
        <Sponsor src={prefeitura}></Sponsor>
        <Sponsor src={secretaria}></Sponsor>
        <Sponsor src={casaTueTimba}></Sponsor>
        <Sponsor src={governo}></Sponsor>
      </Sponsers>
      <Curiosity>
        <Us>
          <Column>
            <Title>Quem somos</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <LargerImg src={mapa}></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
          <Column>
            <SmallerImg src={mapa}></SmallerImg>
          </Column>
        </Us>

        <WhatIs>
          <Column>
            <SmallerImg src={cidade}></SmallerImg>
          </Column>
          <Column>
            <Title>O que é o acervo?</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <LargerImg src={cidade}></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
        </WhatIs>

        <Events>
          <Column>
            <Title>Nosso eventos</Title>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <LargerImg src={festa}></LargerImg>
            <Button>BOTÃO</Button>
          </Column>
          <Column>
            <SmallerImg src={festa}></SmallerImg>
          </Column>
        </Events>
      </Curiosity>
    </Container>
  );
}
