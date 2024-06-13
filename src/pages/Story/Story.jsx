import {
  BackgroundTitle,
  Container,
  Image,
  Paragraph,
  Title,
  Legend,
} from "./Styles";

import FirstStoryImage from "../../assets/FirstStoryImage.svg";
import SecondStoryImage from "../../assets/SecondStoryImage.svg";
import ThirdStoryImage from "../../assets/ThirdStoryImage.svg";

export default function Story() {
  return (
    <>
      <BackgroundTitle>
        <Title>HISTÓRIA</Title>
      </BackgroundTitle>
      <Container>
        <Paragraph>
          A história de Bom Despacho remonta ao Brasil colonial, com a ocupação
          do território por portugueses e luso-brasileiros no final do século
          XVI. Exploradores como Sebastião Marinho, João Pereira de Souza
          Botafogo e Félix Jaques desbravaram a região em busca de ouro e outros
          recursos. No entanto, o povoamento efetivo começou no século XVII, com
          a descoberta de minas de ouro no Vale do Tripuí e a formação de
          centros urbanos como Ouro Preto, Sabará e Pitangui.
        </Paragraph>
        <Paragraph>
          Entre 1694 e 1702, a região de Pitangui, próxima a Bom Despacho,
          experimentou um influxo populacional devido aos achados de ouro. O
          território de Bom Despacho começou a ser explorado por Antônio
          Rodrigues Velho e sua comitiva, resultando na posse de terras por
          Gervásio de Campos Bicudo em 1715. Apesar de Gervásio retornar a São
          Paulo, as terras foram posteriormente povoadas.
        </Paragraph>
        <Image src={SecondStoryImage} alt="Imagem de bom despacho" />
        <Legend>
          Igrejinha da Cruz do Monte (Acervo do fotógrafo José Pessoa Marra)
        </Legend>
        <Paragraph>
          Na segunda metade do século XVIII, com o declínio da produção de ouro,
          a economia de Minas Gerais voltou-se para a agricultura e pecuária.
          Quilombos, formados por escravizados fugitivos, ocupavam a região,
          dificultando a colonização. Gomes Freire de Andrade, governador de
          Minas, incentivou o combate aos quilombos, facilitando a ocupação da
          região.
        </Paragraph>
        <Paragraph>
          Em 1758, equipes responsáveis por combater quilombolas começaram a se
          estabelecer em Bom Despacho. Entre os primeiros povoadores destacam-se
          alferes Barnabé Alves, Custódio Vieira Lanhoso e João Gonçalves
          Paredes, que doou terras para o Patrimônio de Nossa Senhora do Bom
          Despacho. Em 1765, a região já possuía 24 casas, dedicadas à pecuária
          e agricultura.
        </Paragraph>
        <Image src={ThirdStoryImage} alt="Imagem de bom despacho" />
        <Paragraph>
          A partir de 1813, Bom Despacho contava com uma população de 1.532
          habitantes, e um professor particular educava os filhos da
          aristocracia local. Em 1853, foi fundado o primeiro estabelecimento
          comercial, a Casa Assumpção, e em 1880, a freguesia desmembrou-se de
          Pitangui, passando a pertencer a Inhaúma. A luta pela emancipação
          municipal intensificou-se nas décadas seguintes.
        </Paragraph>
        <Paragraph>
          Em 30 de agosto de 1911, Bom Despacho foi elevada a município, com uma
          população de cerca de 18 mil habitantes. Em 1912, o primeiro grupo de
          vereadores foi eleito, e o município iniciou um período de
          desenvolvimento com a criação de escolas, clubes, e a Santa Casa. A
          construção da Estrada de Ferro Paracatu, inaugurada em 1921, trouxe
          crescimento econômico e social.
        </Paragraph>
        <Paragraph>
          A década de 1930 marcou a instalação do Sétimo Batalhão de Caçadores
          Mineiros na Vila Operária e a construção da Igreja Matriz de Nossa
          Senhora do Bom Despacho, consolidada em 1948. Nesse período, também
          foi criada a primeira grande indústria, a Fábrica de Tecidos Aliança
          Bondespachense.
        </Paragraph>
        <Image src={FirstStoryImage} alt="Imagem de bom despacho" />
        <Paragraph>
          Nos anos 1950 e 1960, Bom Despacho viu avanços na educação com a
          criação de novos colégios e cursos de formação, e melhorias em
          infraestrutura com a chegada da Cemig, Copasa e Telemig. A construção
          da BR-262 impulsionou a industrialização e gerou empregos.
        </Paragraph>
        <Paragraph>
          Desde os anos 2000, Bom Despacho recebeu novas instituições de ensino
          superior e centros de lazer, como a FUNPAC, agora UNA, e o SESC-Laces.
          A cidade também foi equipada com um hemocentro e a Universidade Aberta
          do Brasil, oferecendo ensino gratuito e de qualidade à população
          local.
        </Paragraph>
      </Container>
    </>
  );
}
