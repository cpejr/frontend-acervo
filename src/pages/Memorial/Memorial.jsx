import {
  Container,
  Title,
  Filter,
  Characteristics,
  DivSelect,
  FilterTitle,
  UniSelect,
  StyledCheckbox,
  VerticalLine,
  StyledCard,
  OrangeButton,
  CardLine,
  Image,
  LineSVG,
  Group,
  ButtonDiv,
} from "../Memorial/Styles";
import { SearchBar } from "../../components";

// const cardData = [
//   { _id: 1, title: "Card 1", description: "Descrição do Card 1" },
//   { _id: 2, title: "Card 2", description: "Descrição do Card 2" },
//   { _id: 3, title: "Card 3", description: "Descrição do Card 3" },
//   { _id: 4, title: "Card 4", description: "Descrição do Card 4" },
//   { _id: 5, title: "Card 5", description: "Descrição do Card 5" },
// ];

export default function Memorial() {
  const filters = [
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];

  const characteristicCheckboxes = [
    { label: "Característica 1" },
    { label: "Característica 2" },
    { label: "Característica 3" },
  ];

  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar></SearchBar>

      <Filter>
        <Characteristics>
          <FilterTitle>Características:</FilterTitle>
          {characteristicCheckboxes.map((checkbox, index) => (
            <label key={index}>
              <StyledCheckbox />
              {checkbox.label}
            </label>
          ))}
        </Characteristics>
        <VerticalLine />
        <DivSelect>
          <UniSelect
            options={filters}
            optionLabel="label"
            placeholder="Ordenar Por"
          />
        </DivSelect>
      </Filter>

      <StyledCard>
        <Image>
          <img
            src={
              "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/54/b8/ac/noturna.jpg?w=500&h=500&s=1"
            }
          />
        </Image>
        <Group>
          <LineSVG></LineSVG>
          <CardLine>EVENTO</CardLine>
        </Group>
        <CardLine>
          <p>
            Descrição Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer sit amet est mauris.
          </p>
        </CardLine>

        <ButtonDiv>
          <OrangeButton>Botão</OrangeButton>
        </ButtonDiv>
      </StyledCard>
    </Container>
  );
}
