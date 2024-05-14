import { useState, useEffect } from "react";
import {
  Container,
  Title,
  Filter,
  DivSelect,
  UniSelect,
  DivLine,
  Line,
} from "../Memorial/Styles";
import { SearchBar } from "../../components";
import { useQueryClient } from "@tanstack/react-query";
import { useGetMemorial } from "../../hooks/querys/memorial";
import LargeCard from "../../components/features/LargeCard/LargeCard";
export default function Memorial() {
  const [imagesLoading, setImagesLoading] = useState(true);
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
        <DivSelect>
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
