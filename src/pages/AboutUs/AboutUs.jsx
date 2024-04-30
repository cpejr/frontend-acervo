import { useMediaQuery } from "react-responsive";
import {
  BomDespachoImage,
  HerbertonImage,
  MatrizImage,
  VilaMilitarImage,
  ColerfulAreaUp,
  ColerfulAreaDown,
} from "../../assets";
import {
  Title,
  Container,
  Line,
  TextColumn,
  Banner,
  TextLine,
  ImageLine,
  PintaColumn,
  TextPintaColumn,
} from "./Styles";
import { breakpoints } from "../../styles/stylesVariables";

export default function AboutUs() {
  const isMobileScreen = useMediaQuery({ maxWidth: breakpoints.smallTablet });

  return (
    <Container>
      {isMobileScreen ? (
        <Title>APRESENTAÇÃO</Title>
      ) : (
        <Title> &ensp; &ensp; APRESENTAÇÃO</Title>
      )}
      <Line>
        <TextColumn>
          <p>
            O site Nossa História – Escrita, Imagem e som é um depositário do
            acervo de vídeos, fotografias, áudios e escritos que compõem a
            memória do povo de Bom Despacho, sejam eles documentos públicos ou
            privados.
          </p>
        </TextColumn>
        <TextColumn>
          <img src={VilaMilitarImage} alt="VilaMilitarImage" />
        </TextColumn>
      </Line>
      <ImageLine>
        <TextColumn>
          <img src={MatrizImage} alt="Matriz Image" />
        </TextColumn>
        <TextColumn>
          <p>
            Aqui, o acervo estará preservado e também poderá ser facilmente
            acessado por você e por todas as pessoas, de onde estiverem. Você
            pode buscar por nome, datas, eventos ou livremente navegar pelo
            site.
          </p>
        </TextColumn>
      </ImageLine>
      <Banner style={{ backgroundImage: `url(${ColerfulAreaUp})` }}>
        <p>
          O importante é que você, que de alguma forma é parte de Bom Despacho,
          se encontre e se identifique como personagem da nossa história!
        </p>
      </Banner>
      {isMobileScreen ? (
        <Title> QUEM SOMOS? </Title>
      ) : (
        <Title> &ensp; &ensp; QUEM SOMOS? </Title>
      )}
      <TextLine>
        <p>
          O Site Nossa História – Escrita, Imagem e Som é a parte de uma rede de
          mídias criada e gerenciada pela CASA TUÉ-TIMBUÁ. A CASA TUÉ-TIMBUÁ é
          uma Organização Não Governamental (ONG), portanto sem fins lucrativos,
          criada para atuar na cidade de Bom Despacho no desenvolvimento de
          projetos nas áreas da educação, cultura, ensino e meio-ambiente, a
          qual tem como Coordenador Herberton Sabino – Pinta.
        </p>
      </TextLine>
      <Line>
        <PintaColumn>
          <img src={HerbertonImage} alt="Heberto Pinta Photo" />
        </PintaColumn>
        <TextPintaColumn>
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
        </TextPintaColumn>
      </Line>
      <ImageLine style={{ marginBottom: "2rem", height: "40rem" }}>
        <TextColumn>
          <p>
            O site é parte de uma Rede, que inclui Whatsapp, Instagram e
            Facebook, criada para o compartilhamento da memória e história de
            Bom Despacho e para a divulgação dos eventos culturais de nossa
            cidade. <br />
            Porém, esse site só existe por ser concebido como uma plataforma
            interativa e colaborativa, somente existe a partir da contribuição
            da comunidade de Bom Despacho.
          </p>
        </TextColumn>
        <TextColumn>
          <img
            style={{ border: "none", height: "20rem" }}
            src={BomDespachoImage}
            alt="Bom Despacho Image"
          />
        </TextColumn>
      </ImageLine>
      <Banner
        style={{
          backgroundImage: `url(${ColerfulAreaDown})`,
          marginBottom: "2rem",
        }}
      >
        <p>
          Por ser assim, todos, de todas as classes sociais, credos, cores e
          amores que de alguma forma se sintam pertencentes à Bom Despacho e que
          contribuam com fotografias, vídeos, escritas ou que apoiem,
          compartilhem ou divulguem nossa memória histórica são parte desse
          projeto, portanto, parte do quem somos.
        </p>
      </Banner>
    </Container>
  );
}
