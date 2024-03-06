import { useState } from "react";
import Card from "../../components/features/Card/Card";
import {
  Container,
  DivLine,
  Line,
  TrendingTools,
  Filter,
  Characteristics,
  Prices,
  DivSelect,
  Title,
  StyledCheckbox,
  UniSelect,
} from "./Styles";
import { SearchBar } from "../../components";

export default function Events() {
  const [filter, setFilter] = useState([]);
  const filters = [
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];

  const characteristicCheckboxes = [
    { label: "Característica 1" },
    { label: "Característica 2" },
  ];

  const priceCheckboxes = [{ label: "Preço 1" }, { label: "Preço 2" }];

  const [characteristicCheckedStates, setCharacteristicCheckedStates] =
    useState(Array(characteristicCheckboxes.length).fill(false));

  const [priceCheckedStates, setPriceCheckedStates] = useState(
    Array(priceCheckboxes.length).fill(false)
  );

  const handleCharacteristicCheckboxChange = (index) => {
    const newCheckedStates = [...characteristicCheckedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setCharacteristicCheckedStates(newCheckedStates);
  };

  const handlePriceCheckboxChange = (index) => {
    const newCheckedStates = [...priceCheckedStates];
    newCheckedStates[index] = !newCheckedStates[index];
    setPriceCheckedStates(newCheckedStates);
  };

  const cardData = [
    { _id: 1, title: "Card 1", description: "Descrição do Card 1" },
    { _id: 2, title: "Card 2", description: "Descrição do Card 2" },
    { _id: 3, title: "Card 3", description: "Descrição do Card 3" },
    { _id: 4, title: "Card 4", description: "Descrição do Card 4" },
    { _id: 5, title: "Card 5", description: "Descrição do Card 5" },
  ];

  return (
    <Container>
      <SearchBar placeholder={"Pesquisar Evento"}></SearchBar>
      <Filter>
        <Characteristics>
          <Title>Características:</Title>
          {characteristicCheckboxes.map((checkbox, index) => (
            <label key={index}>
              <StyledCheckbox
                checked={characteristicCheckedStates[index]}
                onChange={() => handleCharacteristicCheckboxChange(index)}
              />
              {checkbox.label}
            </label>
          ))}
        </Characteristics>
        <Prices>
          <Title>Preços:</Title>
          {priceCheckboxes.map((checkbox, index) => (
            <label key={index}>
              <StyledCheckbox
                checked={priceCheckedStates[index]}
                onChange={() => handlePriceCheckboxChange(index)}
              />
              {checkbox.label}
            </label>
          ))}
        </Prices>
        <DivSelect>
          <UniSelect
            value={filter}
            onChange={(e) => setFilter(e.value)}
            options={filters}
            optionLabel="label"
            showClear
            placeholder="Ordenar Por"
            className="w-full md:w-14rem"
          ></UniSelect>
        </DivSelect>
      </Filter>
      <TrendingTools>
        <DivLine>
          <Line>
            {cardData.map((card, index) => (
              <Card key={index} data={card} />
            ))}
          </Line>
        </DivLine>
      </TrendingTools>
    </Container>
  );
}
