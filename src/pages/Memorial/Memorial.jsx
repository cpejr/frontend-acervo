import { useState, useEffect } from "react";
import {
  Container,
  Title,
  ContainerFilter,
  DivSelect,
  UniSelect,
  VerticalLine,
  DivLine,
  Calendar,
  Buttons,
  ButtonsDiv,
  Line,
} from "../Memorial/Styles";
import { toast } from "react-toastify";
import { useGetMemorialByDate } from "../../hooks/querys/memorial";

import { SearchBar } from "../../components";
import { Checkbox } from "primereact/checkbox";
import { useQueryClient } from "@tanstack/react-query";
import { useGetMemorial } from "../../hooks/querys/memorial";
import LargeCard from "../../components/features/LargeCard/LargeCard";
export default function Memorial() {
  const [characteristicCheckboxes, setCharacteristicCheckboxes] = useState([
    { label: "Característica 1", value: "c1", checked: false },
    { label: "Característica 2", value: "c2", checked: false },
    { label: "Característica 3", value: "c3", checked: false },
  ]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [dates, setDates] = useState(null);
  const [dateRange, setDateRange] = useState();
  const { data: memorial } = useGetMemorialByDate({
    dateRange: dateRange,
    onError: (err) => {
      toast.error(err);
    },
  });
  console.log(dateRange);
  const filters = [
    { label: "Favoritos", value: "title" },
    { label: "Melhor avaliados", value: "date" },
  ];

  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSelectedSort] = useState("");

  const handleFilterChange = () => {
    const [initialDate, finalDate] = dates;
    let formattedDateRange;
    if (finalDate === null) {
      formattedDateRange = { oneDate: initialDate.toISOString() };
    } else {
      formattedDateRange = {
        initialDate: initialDate.toISOString(),
        finalDate: finalDate.toISOString(),
      };
    }
    setDateRange(formattedDateRange);
  };
  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };
  const handleResetFilter = () => {
    setDates([]);
    setDateRange({});
  };

  const handleChangeSort = (e) => {
    setSelectedSort(e.value);
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
  };

  const {
    data: memorialCards,
    isLoading,
    isError,
  } = useGetMemorial({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["memorialCards"],
      });
    },
    onError: () => {
      setImagesLoading(false);
    },
  });

  useEffect(() => {
    if (!isLoading && !isError) {
      setImagesLoading(false);
    }
  }, [isLoading, isError]);

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
      <ContainerFilter>
        <DivSelect>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            hideOnRangeSelection
            placeholder="Determine uma data"
            showButtonBar
            dateFormat="dd/mm/yy"
          />
          <UniSelect
            aria-label="Botão de ordenação"
            value={sortValue}
            options={filters}
            optionLabel="label"
            showClear
            placeholder="Ordenar Por"
            onChange={handleChangeSort}
            className="w-full md:w-14rem"
          />
        </DivSelect>
        <ButtonsDiv>
          <Buttons onClick={handleFilterChange}>Filtrar</Buttons>
          <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
        </ButtonsDiv>
      </ContainerFilter>
      <DivLine>
        {memorialCards
          ?.filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((card) => (
            <Line key={card.title}>
              <LargeCard
                aria-label="Cartão de memorial"
                data={card}
                imagesLoading={imagesLoading}
              />
            </Line>
          ))}
      </DivLine>
    </Container>
  );
}
