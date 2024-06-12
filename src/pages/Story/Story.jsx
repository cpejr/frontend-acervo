import { BackgroundTitle, Container, Image, Paragraph, Title } from "./Styles";

import FirstStoryImage from "../../assets/FirstStoryImage.svg";
import ThirdStoryImage from "../../assets/ThirdStoryImage.svg";

export default function Story() {
  return (
    <>
      <BackgroundTitle>
        <Title>HISTÓRIA</Title>
      </BackgroundTitle>
      <Container>
        <Paragraph>
          A história de Bom Despacho remota aos tempos do Brasil colonial, onde
          a vasta região da capitania de Minas Gerais era, em grande parte,
          coberta por densas florestas. Local de desbravamento pelos
          bandeirantes, o território, de acordo com indícios arqueológicos, foi
          habitado originalmente por índios cataguás.
        </Paragraph>
        <Paragraph>
          A região foi ocupada por portugueses e luso-brasileiros nos fins do
          século XVI. Entre os primitivos exploradores, podem ser citados:
          Sebastião Marinho (1592); o capitão-mor João Pereira de Souza Botafogo
          (1596); Afonso Sardinha e João de Prado (1594 a 1599); e Félix Jaques
          (1616). Nos tempos das bandeiras, Minas foi explorada através de
          várias incursões, motivadas pelo aprisionamento de indígenas, pela
          necessidade de mapeamento ou pela busca de ouro, metais e pedras
          preciosas.
        </Paragraph>
        <Paragraph>
          Todavia, nenhuma dessas incursões resultaram no povoamento do
          território, que só deu indícios no século XVII, quando bandeirantes
          paulistas descobriram minas de ouro no Vale do Tripuí e a região
          recebeu grande quantidade de pessoas. Neste período, a extração
          aurífera oferecia rápida possibilidade de enriquecimento. Assim, o
          forte contingente populacional que afluiu para a região contribuiu
          para a formação de vários centros urbanos, entre eles, Ouro Preto,
          Sabará, Diamantina e Pitangui, vila próxima a região onde hoje
          situa-se Bom Despacho.
        </Paragraph>
        <Paragraph>
          Os primeiros achados de ouro em Pitangui compreendem os anos 1694 a
          1702, quando milhares de pessoas se dirigiram para a localidade. Em
          poucos anos, Pitangui tornaria-se Vila de Nossa Senhora da Piedade de
          Pitangui, centro difusor das incursões e povoamentos do Alto São
          Francisco.
        </Paragraph>
        <Paragraph>
          Uma comitiva liderada por Antônio Rodrigues Velho – conhecido como
          Velho da Taipa, um dos fundadores de Pitangui, José de Campos Bicudo e
          Gervásio de Campos Bicudo, resultou na exploração de grande parte das
          terras onde hoje se localiza Bom Despacho. Ao que tudo indica, através
          de uma carta de sesmaria, datada de 1715, Gervásio, minerador e
          sertanista, foi o primeiro a possuir o título destas terras. No
          entanto, embora não tendo encontrado documentos que indiquem a
          história dessa sesmaria, sabe-se que Gervásio retornou à São Paulo,
          sua cidade, por volta de 1725 e as terras tornaram-se devolutas.
        </Paragraph>
        <Image src={FirstStoryImage} alt="Imagem de bom despacho" />
        <Image src={ThirdStoryImage} alt="Imagem de bom despacho" />
      </Container>
    </>
  );
}
