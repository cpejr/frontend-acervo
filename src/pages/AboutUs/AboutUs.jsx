import React from "react";
import BomDespachoImage from "../../assets/BomDespachoImage.png";
import HerbertonImage from "../../assets/HerbertonImage.png";
import {
  Content,
  Title,
  LineTitle,
  TextContainer,
  SubTitle,
  ImageArea1,
  ImageArea2,
  Image,
  ImageBox,
  Area1,
  Area2,
  Text3,
  Text4,
} from "./Styles";

export default function AboutUs() {
  return (
    <Content>
      <Title>Quem somos</Title>
      <LineTitle />
      <TextContainer>
        <p>
          O Site Nossa História – Escrita, Imagem e Som faz parte de uma rede de
          mídias gerenciada pela CASA TUÉ-TIMBUÁ, uma ONG sem fins lucrativos,
          atuando em Bom Despacho no desenvolvimento de projetos nas áreas da
          educação, cultura, ensino e meio ambiente, sob a coordenação de
          Herberton Sabino – Pinta.
        </p>
      </TextContainer>
      <Area1>
        <ImageArea1>
          <SubTitle>Herberton Pinta</SubTitle>
          <ImageBox>
            <Image src={HerbertonImage} alt="HerbertonImage" />
          </ImageBox>
        </ImageArea1>
        <TextContainer>
          <p>
            Como muitos nascidos em Bom Despacho, sou mais conhecido por um
            apelido, que é Pinta. Sou filho de José Raimundo Sabino, o “Major”
            Sabino e de Martha Maria Sabino, a “Martinha do Sabino”. Nasci na
            Vila Militar, assim como meus outros 8 irmãos, cresci no Arraial,
            hoje bairro São José e depois, com o falecimento de meu pai, me
            mudei para a Praça da Matriz. Sou Professor de História, mestre em
            Educação e Gestão Social, atuo como consultor na área de educação,
            ensino e gestão e coordeno a ONG Casa Tué-Timbuá.
          </p>
        </TextContainer>
      </Area1>
      <Area2>
        <TextContainer>
          <Text3>
            O site é parte de uma Rede, que inclui o X, Instagram e Facebook,
            criada para o compartilhamento da memória e história de Bom Despacho
            e para a divulgação dos eventos culturais de nossa cidade.
          </Text3>
          <Text4>
            Porém, esse site só existe por ser concebido como uma plataforma
            interativa e colaborativa, somente existe a partir da contribuição
            da comunidade de Bom Despacho.
          </Text4>
        </TextContainer>
        <ImageArea2>
          <Image src={BomDespachoImage} alt="BomDespachoImage" />
        </ImageArea2>
      </Area2>
      <TextContainer>
        <p>
          Todos, de todas as classes sociais, credos, cores e amores que de
          alguma forma se sintam pertencentes à Bom Despacho e que contribuam
          com fotografias, vídeos, escritas ou que apoiem, compartilhem ou
          divulguem nossa memória histórica são parte desse projeto, portanto,
          parte do quem somos.
        </p>
      </TextContainer>
    </Content>
  );
}
