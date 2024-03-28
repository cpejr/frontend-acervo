import { useState, useEffect } from "react";
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
import { toast } from "react-toastify";
import { SearchBar } from "../../components";
import { Checkbox } from "primereact/checkbox";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCards } from "../../hooks/querys/memorial";
import LargeCard from "../../components/features/LargeCard/LargeCard";

export default function Memorial() {
  const [characteristicCheckboxes, setCharacteristicCheckboxes] = useState([
    { label: "Característica 1", value: "c1", checked: false },
    { label: "Característica 2", value: "c2", checked: false },
    { label: "Característica 3", value: "c3", checked: false },
  ]);

  const filters = [
    { label: "Nome", value: "title" },
    { label: "Data", value: "date" },
  ];

  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSelectedSort] = useState("title");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSelectedSort(e.target.value);
    updateCards(e.target.value);
  };

  const handleChangeCheckbox = (e) => {
    let index = 0;
    for (; index < characteristicCheckboxes.length; index++) {
      if (characteristicCheckboxes[index].value === e.target.name) {
        break;
      }
    }

    const newCheckedStates = [...characteristicCheckboxes];
    newCheckedStates[index].checked = !newCheckedStates[index].checked;
    setCharacteristicCheckboxes(newCheckedStates);
    updateCards();
  };

  function updateCards(sort) {
    try {
      let selectedFilters = [];
      characteristicCheckboxes.forEach((val) => {
        if (val.checked) selectedFilters.push(val.value);
      });

      if (!sort) {
        sort = sortValue;
      }

      const selection = {
        order: sort,
        filters: selectedFilters,
      };

      getCards(selection);
    } catch (e) {
      toast.error("Erro ao carregar memorial");
    }
  }

  const { mutate: getCards, data: memorialCards } = useGetCards({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorialCards"],
      });
    },
    onError: () => {},
  });

  useEffect(() => {
    updateCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar
        aria-label="Barra de pesquisa"
        placeholder="Pesquisar"
        value={searchValue}
        search={handleSearchChange}
      />
      <Filter>
        <Characteristics>
          <FilterTitle>Características:</FilterTitle>
          {characteristicCheckboxes.map((checkbox) => (
            <label key={checkbox.value}>
              <Checkbox
                aria-label="Botão seletor de caracteristicas"
                checked={checkbox.checked}
                name={checkbox.value}
                onChange={handleChangeCheckbox}
              />
              {checkbox.label}
            </label>
          ))}
        </Characteristics>
        <VerticalLine />
        <DivSelect>
          <UniSelect
            aria-label="Botão de ordenação"
            options={filters}
            optionLabel="label"
            placeholder="Ordenar Por"
            onChange={handleChangeSort}
          />
        </DivSelect>
      </Filter>
      <DivLine>
        {memorialCards?.map((card) => (
          <Line key={card.title}>
            <LargeCard aria-label="Cartão de memorial" data={card} />
          </Line>
        ))}
      </DivLine>
    </Container>
  );
}
