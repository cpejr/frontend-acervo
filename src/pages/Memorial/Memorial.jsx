import { useState, useEffect } from "react";
import {
  Container,
  Title,
  ContainerFilter,
  BackgroundTitle,
  DivSelect,
  UniSelect,
  DivLine,
  Calendar,
  Buttons,
  ButtonsDiv,
  Line,
  MultipleSelect,
} from "./Styles";
import { toast } from "react-toastify";
import { useGetMemorialByDate } from "../../hooks/querys/memorial";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
export default function Memorial() {
  const [characteristicCheckboxes, setCharacteristicCheckboxes] = useState([
    { label: "Característica grande", value: "grande", checked: false },
    { label: "Característica teste1", value: "teste1", checked: false },
    { label: "Característica teste2", value: "teste2", checked: false },
  ]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [filteredMemorial, setFilteredMemorial] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [dates, setDates] = useState(null);
  const [dateRange, setDateRange] = useState();
  const [sortValue, setSelectedSort] = useState("");
  const [options, setOptions] = useState([]);
  const filters = [
    { label: "Favoritos", value: "title" },
    { label: "Melhor avaliados", value: "date" },
  ];
  const queryClient = useQueryClient();
  // BackEnd Calls

  const {
    data: memorial,
    isLoading,
    isError,
  } = useGetMemorialByDate({
    dateRange: dateRange,
    onError: (err) => {
      setImagesLoading(false);
      toast.error(err);
    },
  });

  // Functions

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleResetFilter = () => {
    setDates([]);
    setDateRange({});
    setTypes([]);
    setFilteredMemorial(memorial);
    queryClient.invalidateQueries({
      queryKey: ["memorial"],
    });
    queryClient.invalidateQueries({
      queryKey: ["favoritesMemorials"],
    });
  };

  const handleChangeSort = (e) => {
    setSelectedSort(e.value);
  };

  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      toast.error(err);
    },
  });
  useEffect(() => {
    if (!isLoading && !isError) {
      setImagesLoading(false);
    }
  }, [isLoading, isError]);

  useEffect(() => {
    let types = categoryType?.map((category) => {
      return category?.name;
    });
    if (categoryType) {
      setOptions(types);
    }
    if (memorial) {
      setFilteredMemorial(memorial);
    }
  }, [categoryType, memorial]);

  const categoryFilter = () => {
    console.log(dates);
    console.log(dateRange);
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
    console.log(memorial);
    if (types.length === 0) {
      setFilteredMemorial(memorial);
    } else {
      const filtered = memorial.filter((memorial) =>
        types.every((type) =>
          memorial.id_categoryType.some((category) => category.name === type)
        )
      );

      setFilteredMemorial(filtered);
    }
    console.log(filteredMemorial);
  };

  return (
    <Container>
      <BackgroundTitle>
        <Title>ACERVO</Title>
      </BackgroundTitle>
      <SearchBar
        aria-label="Barra de pesquisa"
        placeholder="Pesquisar Acervo"
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
      </Filter>
      <ButtonsDiv>
        <Buttons onClick={categoryFilter}>Filtrar</Buttons>
        <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
      </ButtonsDiv>
      <DivLine>
        {filteredMemorial
          ?.filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
          ).filter((card) => {
            const ids = card.id_categoryType
          
            for (let i = 0; i < ids.length; i++) {
              for (let u = 0; u < characteristicCheckboxes.length; u++) {
                if(characteristicCheckboxes[u].value == (ids[i].name) && characteristicCheckboxes[u].checked == true)
                  return true;              
              }           
            }
          
            for (let index = 0; index < characteristicCheckboxes.length; index++) {
              if (characteristicCheckboxes[index].checked == true) {
                return false;
              }
            }
            return true;
          } 
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
