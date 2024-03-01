import React from "react";
import {
  BomDespachoImage,
  HerbertonImage,
  MatrizImage,
  VilaMilitarImage,
  ColerfulAreaUp,
  ColerfulAreaDown,
} from "../../assets";
import {
  Content,
  Title,
  LineTitle,
  TextContainer,
  TextContainerVilaMilitar,
  TextContainerMatriz,
  TextAreaColorfulArea,
  SubTitle,
  ImageAreaHerberton,
  ImageAreaBomDespacho,
  ImageHerberton,
  ImageBomDespacho,
  ImageMatriz,
  ImageVilaMilitar,
  ImageBoxHerberton,
  ImageBoxMatriz,
  ImageBoxVilaMilitar,
  HerbertonArea,
  BomDespachoArea,
  ApresentationArea1,
  ApresentationArea2,
  BomDespachoText1,
  BomDespachoText2,
  ImageAreaVilaMilitar,
  ImageAreaMatriz,
  ApresentationAreaColorfulUp,
  AboutUsAreaColorfulDown,
} from "./Styles";

export default function AboutUs() {
  return (
    <Content>
      <Title>APRESENTAÇÃO</Title>
      <LineTitle />
      <ApresentationArea1>
        <TextContainerVilaMilitar>
          <p>
            O site Nossa História – Escrita, Imagem e som é um depositário do
            acervo de vídeos, fotografias, áudios e escritos que compõem a
            memória do povo de Bom Despacho, sejam eles documentos públicos ou
            privados.
          </p>
        </TextContainerVilaMilitar>
        <ImageAreaVilaMilitar>
          <ImageBoxVilaMilitar>
            <ImageVilaMilitar src={VilaMilitarImage} alt="VilaMilitarImage" />
          </ImageBoxVilaMilitar>
        </ImageAreaVilaMilitar>
      </ApresentationArea1>
      <ApresentationArea2>
        <ImageAreaMatriz>
          <ImageBoxMatriz>
            <ImageMatriz src={MatrizImage} alt="ApresentationImage1" />
          </ImageBoxMatriz>
        </ImageAreaMatriz>
        <TextContainerMatriz>
          <p>
            Aqui, o acervo estará preservado e também poderá ser facilmente
            acessado por você e por todas as pessoas, de onde estiverem. Você
            pode buscar por nome, datas, eventos ou livremente navegar pelo
            site.
          </p>
        </TextContainerMatriz>
      </ApresentationArea2>
      <ApresentationAreaColorfulUp
        style={{ backgroundImage: `url(${ColerfulAreaUp})` }}
      >
        <TextAreaColorfulArea>
          O importante é que você, que de alguma forma é parte de Bom Despacho,
          se encontre e se identifique como personagem da nossa história!
        </TextAreaColorfulArea>
      </ApresentationAreaColorfulUp>
      <Title>QUEM SOMOS</Title>
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
      <HerbertonArea>
        <ImageAreaHerberton>
          <SubTitle>Herberton Pinta</SubTitle>
          <ImageBoxHerberton>
            <ImageHerberton src={HerbertonImage} alt="HerbertonImage" />
          </ImageBoxHerberton>
        </ImageAreaHerberton>
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
      </HerbertonArea>
      <BomDespachoArea>
        <TextContainer>
          <BomDespachoText1>
            O site é parte de uma Rede, que inclui o X, Instagram e Facebook,
            criada para o compartilhamento da memória e história de Bom Despacho
            e para a divulgação dos eventos culturais de nossa cidade.
          </BomDespachoText1>
          <BomDespachoText2>
            Porém, esse site só existe por ser concebido como uma plataforma
            interativa e colaborativa, somente existe a partir da contribuição
            da comunidade de Bom Despacho.
          </BomDespachoText2>
        </TextContainer>
        <ImageAreaBomDespacho>
          <ImageBomDespacho src={BomDespachoImage} alt="BomDespachoImage" />
        </ImageAreaBomDespacho>
      </BomDespachoArea>
      <AboutUsAreaColorfulDown
        style={{ backgroundImage: `url(${ColerfulAreaDown})` }}
      >
        <TextAreaColorfulArea>
          Por ser assim, todos, de todas as classes sociais, credos, cores e
          amores que de alguma forma se sintam pertencentes à Bom Despacho e que
          contribuam com a fotogtafia, vídeos, escritas ou que apoiem,
          compartilhem ou divulguem nossa memória histórica são parte desse
          projeto, portanto, parte do quem somos.
        </TextAreaColorfulArea>
      </AboutUsAreaColorfulDown>
    </Content>
  );
}
