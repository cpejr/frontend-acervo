import Card from "../../components/features/Card/Card";
import {
  Container,
  DivLine,
  Line,
  TrendingTools,
  IconWrapper,
  SVGDiv,
  RotateSearch,
  Filter,
  Characteristics,
  Prices,
  VerticalLine,
  DivSelect,
  Title,
  StyledCheckbox,
  UniSelect,
} from "./Styles";

const CustomCheckbox = ({ label }) => {
  return (
    <label>
      <StyledCheckbox type="checkbox" />
      {label}
    </label>
  );
};

export default function Events({ filter }) {
  const filters = [
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];
  return (
    <Container>
      <IconWrapper>
        <SVGDiv>
          <RotateSearch />
        </SVGDiv>
      </IconWrapper>
      <Filter>
        <Characteristics>
          <Title>Características:</Title>
          <CustomCheckbox label="Características" />
          <CustomCheckbox label="Características" />
        </Characteristics>
        <Prices>
          <Title>Preços:</Title>
          <CustomCheckbox label="Preços" />
          <CustomCheckbox label="Preços" />
        </Prices>
        <VerticalLine></VerticalLine>
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
            <Card />
            <Card />
            <Card />
          </Line>
        </DivLine>
      </TrendingTools>
    </Container>
  );
}
