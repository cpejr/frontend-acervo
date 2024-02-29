import Card from "../../components/features/Card/Card";
import React, { useState } from "react";
import { Select } from "antd";
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
  OrderBox,
  Title,
  StyledCheckbox,
  SelectModal,
} from "./Styles";

const CustomCheckbox = ({ label }) => {
  return (
    <label>
      <StyledCheckbox type="checkbox" />
      {label}
    </label>
  );
};

export default function Events() {
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
        <OrderBox>
          <label>Ordenar Por</label>
          <SelectModal>
            <option></option>
            <option>Melhor avaliados</option>
            <option>Favoritos</option>
          </SelectModal>
        </OrderBox>
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
