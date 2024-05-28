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
  MultipleSelect,
} from "./Styles";
import { toast } from "react-toastify";
import { useGetMemorialByDate } from "../../hooks/querys/memorial";
import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";
import { useQueryClient } from "@tanstack/react-query";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
export default function Memorial() {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [filteredMemorial, setFilteredMemorial] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [dates, setDates] = useState([]);
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
    if (dates.length != 0) {
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
            dateFormat="dd/mm/yy"
          />

          <MultipleSelect
            options={options}
            placeholder="escolha a categoria"
            value={types || ""}
            onChange={(e) => setTypes(e.value)}
          />
        </DivSelect>
      </Filter>
      <ButtonsDiv>
        <Buttons onClick={categoryFilter}>Filtrar</Buttons>
        <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
      </ButtonsDiv>
      <DivLine>
        {filteredMemorial
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
