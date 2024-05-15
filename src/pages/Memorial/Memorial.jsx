import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  UniSelect,
  DivLine,
  Line,
  MultipleSelect,
  Buttons,
  ButtonsDiv,
} from "../Memorial/Styles";
import { SearchBar } from "../../components";
import { useQueryClient } from "@tanstack/react-query";
import { useGetMemorial } from "../../hooks/querys/memorial";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
import { toast } from "react-toastify";

import LargeCard from "../../components/features/LargeCard/LargeCard";
export default function Memorial() {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [options, setOptions] = useState([]);

  const [filteredMemorial, setFilteredMemorial] = useState();

  const filters = [
    { label: "Favoritos", value: "title" },
    { label: "Melhor avaliados", value: "date" },
  ];

  const queryClient = useQueryClient();
  const [searchValue, setSearchValue] = useState("");
  const [sortValue, setSelectedSort] = useState("");

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  };

  const handleChangeSort = (e) => {
    setSelectedSort(e.value);
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
    if (memorialCards) {
      setFilteredMemorial(memorialCards);
    }
  }, [categoryType, memorialCards]);

  const handleResetFilter = () => {
    setTypes([]);
    setFilteredMemorial(memorialCards);
  };

  const categoryFilter = () => {
    if (types.length === 0) {
      // Se nenhuma categoria estiver selecionada, mostrar todos os memoriais
      setFilteredMemorial(memorialCards);
    } else {
      // Filtrar os memoriais com base nas categorias selecionadas
      const filtered = memorialCards.filter((memorial) =>
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
          <MultipleSelect
            options={options}
            placeholder="escolha a categoria"
            value={types || ""}
            onChange={(e) => setTypes(e.value)}
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
