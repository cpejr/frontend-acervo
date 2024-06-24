import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  DivLine,
  Calendar,
  Buttons,
  ButtonsDiv,
  Line,
  MemorialNotFound,
  MultipleSelect,
} from "./Styles";
import { toast } from "react-toastify";
import { useGetMemorialByDate } from "../../hooks/querys/memorial";
import { SearchBar } from "../../components";
import useDebounce from "../../services/useDebouce";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCategoryMemorial } from "../../hooks/querys/categoryMemorial";
export default function Memorial() {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [category, setCategory] = useState([]);
  const [filteredMemorial, setFilteredMemorial] = useState();
  const [searchValue, setSearchValue] = useState("");
  const debouncedName = useDebounce(searchValue);
  const [dates, setDates] = useState(null);
  const [dateRange, setDateRange] = useState();
  const [options, setOptions] = useState([]);

  const queryClient = useQueryClient();
  // BackEnd Calls

  const {
    data: memorial,
    isLoading,
    isError,
  } = useGetMemorialByDate({
    dateRange: dateRange,
    name: debouncedName,
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
    setDates(null);
    setDateRange({});
    setCategory([]);
    setFilteredMemorial(memorial);
    queryClient.invalidateQueries({
      queryKey: ["memorial"],
    });
    queryClient.invalidateQueries({
      queryKey: ["favoritesMemorials"],
    });
  };

  const { data: categoryMemorial } = useGetCategoryMemorial({
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
    let memorials = categoryMemorial?.map((category) => {
      return category?.name;
    });
    if (categoryMemorial) {
      setOptions(memorials);
    }
    if (memorial) {
      setFilteredMemorial(memorial);
    }
  }, [categoryMemorial, memorial]);

  const categoryFilter = () => {
    if (dates && dates.length != 0) {
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
    }

    if (!category || category.length === 0) {
      setFilteredMemorial(memorial);
    } else {
      const filtered = memorial.filter((memorialItem) =>
        category.every((selectedCategory) =>
          memorialItem.id_categoryMemorial.some(
            (categoryItem) => categoryItem.name === selectedCategory
          )
        )
      );
      console.log("✌️filtered --->", filtered);

      setFilteredMemorial(filtered);
    }
  };
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
        <DivSelect>
          <Calendar
            value={dates}
            onChange={(e) => setDates(e.value)}
            selectionMode="range"
            readOnlyInput
            hideOnRangeSelection
            placeholder="Determine uma data"
            showButtonBar
            dateFormat="yy"
            view="year"
          />

          <MultipleSelect
            options={options}
            placeholder="Escolha a categoria"
            value={category || ""}
            onChange={(e) => setCategory(e.value)}
          />
        </DivSelect>
      </Filter>
      <ButtonsDiv>
        <Buttons onClick={categoryFilter}>Filtrar</Buttons>
        <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
      </ButtonsDiv>
      <DivLine>
        {filteredMemorial?.length === 0 && (
          <MemorialNotFound>Nenhum arquivo encontrado</MemorialNotFound>
        )}
        {filteredMemorial?.map((card) => (
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
