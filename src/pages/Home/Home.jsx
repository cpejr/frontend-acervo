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
import { redirect, useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
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
          <Button onClick={() => navigate("/sobre")}>Saiba Mais</Button>
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
            O Site Nossa História – Escrita, Imagem e Som é a parte de uma rede
            de mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ, uma Organização
            Não Governamental criada para atuar na cidade de Bom Despacho no
            desenvolvimento de projetos em diversas áreas.
          </p>
          <LargerImg
            src={cidade}
            alt="Foto representando a cidade de Bom Despacho"
          />
          <Button onClick={() => navigate("/memorial")}>Saiba Mais</Button>
        </Column>
      </Section>

      <Section>
        <Column>
          <Title>Nosso eventos</Title>
          <p>
            Fique por dentro de todos os eventos em Bom Despacho! Há tanto para
            descobrir e participar! Venha fazer parte da nossa história e
            contribuir com acomunidade!
          </p>
          <LargerImg
            src={festa}
            alt="Foto representativa de uma das festas da cidade"
          />
          <Button onClick={() => navigate("/eventos")}>Saiba Mais</Button>
        </Column>
        <SmallerImg
          src={festa}
          alt="Foto representativa de uma das festas da cidade"
        />
      </Section>
    </Container>
  );
}
