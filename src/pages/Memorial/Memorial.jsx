import { useState } from "react";
import {
  Container,
  Title,
  Filter,
  Characteristics,
  DivSelect,
  FilterTitle,
  UniSelect,
  VerticalLine,
  DivLine,
  Line,
} from "../Memorial/Styles";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { Checkbox } from "primereact/checkbox";
import { useGetMemorial } from "../../hooks/querys/memorial";
import { toast } from "react-toastify";

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

  const [searchValue, setSearchValue] = useState("");

  const { data: collection, isLoading } = useGetMemorial({
    onError: (err) => {
      toast.error("Erro ao pegar itens", err);
    },
  });

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar
        placeholder="Pesquisar"
        value={searchValue}
        search={handleSearchChange}
      />
      <Filter>
        <Characteristics>
          <FilterTitle>Características:</FilterTitle>
          {characteristicCheckboxes.map((checkbox, index) => (
            <label key={index}>
              <Checkbox />
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
        {collection
          .filter((card) =>
            card?.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((card, index) => (
            <Line key={index}>
              <LargeCard data={card} />
            </Line>
          ))}
      </DivLine>
    </Container>
  );
}
