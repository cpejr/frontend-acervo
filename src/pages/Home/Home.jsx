import {
  Container,
  Overlay,
  Section,
  Title,
  Column,
  LargerImg,
  SmallerImg,
} from "./Styles";

import { Button } from "../../components";

import { mapa, cidade, festa, apresentacao } from "../../assets/index";
import Sponsors from "./Sponsors";

export default function Home() {
  return (
    <Container>
      <Overlay>
        <img src={apresentacao} alt="Apresentação do site" />
      </Overlay>
      <Sponsors />
      <Section>
        <Column>
          <Title>Quem somos</Title>
          <p>
            O Site Nossa História – Escrita, Imagem e Som é a parte de uma rede
            de mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ, uma Organização
            Não Governamental criada para atuar na cidade de Bom Despacho no
            desenvolvimento de projetos em diversas áreas.
          </p>
          <LargerImg src={mapa} alt="Painel com diversas impressões digitais" />
          <Button>BOTÃO</Button>
        </Column>
        <SmallerImg src={mapa} alt="Painel com diversas impressões digitais" />
      </Section>

      <Section>
        <SmallerImg
          src={cidade}
          alt="Foto representando a cidade de Bom Despacho"
        />
        <Column>
          <Title>O que é o acervo?</Title>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo.
          </p>
          <LargerImg
            src={cidade}
            alt="Foto representando a cidade de Bom Despacho"
          />
          <Button>BOTÃO</Button>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>Nosso eventos</Title>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam eaque ipsa,
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt, explicabo.
          </p>
          <LargerImg
            src={festa}
            alt="Foto representativa de uma das festas da cidade"
          />
          <Button>BOTÃO</Button>
        </Column>
        <SmallerImg
          src={festa}
          alt="Foto representativa de uma das festas da cidade"
        />
      </Section>
    </Container>
  );
}
