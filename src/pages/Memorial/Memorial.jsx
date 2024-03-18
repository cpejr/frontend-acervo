import { useState } from "react";
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
  DivLine,
  Line,
} from "../Memorial/Styles";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";

const cardData = [
  { _id: 1, title: "Card 1", description: "Descrição do Card 1" },
  { _id: 2, title: "Card 2", description: "Descrição do Card 2" },
];

export default function Memorial() {
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];

  const characteristicCheckboxes = [
    { label: "Característica 1" },
    { label: "Característica 2" },
    { label: "Característica 3" },
  ];

  const filteredCardData = cardData.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar
        placeholder="Pesquisar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
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
      <DivLine>
        {filteredCardData.map((card, index) => (
          <Line key={index}>
            <LargeCard data={card} />
          </Line>
        ))}
      </DivLine>
    </Container>
  );
}
