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
  OurEvents,
  CuriosityButton,
  UsTitle,
  Column,
  Img1,
  Img2,
} from "./Styles";

import Gov from "/src/assets/Home/Governo.png";
import Cultura from "/src/assets/Home/LeiCultura.png";
import Pref from "/src/assets/Home/Prefeitura.png";
import Min from "/src/assets/Home/MinisterioTurismo.png";
import Fundo from "/src/assets/Home/fotoFundo.png";
import Cidade from "/src/assets/Home/Cidade.png";
import Mapa from "/src/assets/Home/Mapa.png";
import Festa from "/src/assets/Home/Festa.png";

export default function Home() {
  return (
    <Container>
      <Overlay>
        <UnderImage src={Fundo}></UnderImage>
        <Logo></Logo>
      </Overlay>
      <Sponsers>
        <Sponsor src={Cultura}></Sponsor>
        <Sponsor src={Pref}></Sponsor>
        <Sponsor src={Min}></Sponsor>
        <Sponsor src={Gov}></Sponsor>
      </Sponsers>
      <Curiosity>
        <Us>
          <Column>
            <UsTitle>Quem somos</UsTitle>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <Img1 src={Mapa}></Img1>
            <CuriosityButton>BOTÃO</CuriosityButton>
          </Column>
          <Column>
            <Img2 src={Mapa}></Img2>
          </Column>
        </Us>

        <WhatIs>
          <Column>
            <Img2 src={Cidade}></Img2>
          </Column>
          <Column>
            <UsTitle>O que é o acervo?</UsTitle>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <Img1 src={Cidade}></Img1>
            <CuriosityButton>BOTÃO</CuriosityButton>
          </Column>
        </WhatIs>

        <OurEvents>
          <Column>
            <UsTitle>Nosso eventos</UsTitle>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt, explicabo.
            </p>
            <Img1 src={Festa}></Img1>
            <CuriosityButton>BOTÃO</CuriosityButton>
          </Column>
          <Column>
            <Img2 src={Festa}></Img2>
          </Column>
        </OurEvents>
      </Curiosity>
    </Container>
  );
}
