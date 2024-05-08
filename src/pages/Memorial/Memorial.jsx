import { useState } from "react";
import {
  Container,
  Title,
  ContainerFilter,
  DivSelect,
  UniSelect,
  DivLine,
  Calendar,
  Buttons,
  ButtonsDiv,
  Line,
} from "../Memorial/Styles";
import { toast } from "react-toastify";
import { useGetMemorialByDate } from "../../hooks/querys/memorial";

import { SearchBar } from "../../components";
import LargeCard from "../../components/features/LargeCard/LargeCard";

const cardData = [
  { _id: 1, title: "Card 1", description: "Descrição do Card 1" },
  { _id: 2, title: "Card 2", description: "Descrição do Card 2" },
];

export default function Memorial() {
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
    { label: "Melhor avaliados", value: "melhorAvaliados" },
    { label: "Favoritos", value: "favoritos" },
  ];
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
    setSearchValue(e.target.value);
  };
  const handleResetFilter = () => {
    setDates([]);
    setDateRange({});
  };
  return (
    <Container>
      <Title>ACERVO</Title>
      <SearchBar
        placeholder="Pesquisar"
        value={searchValue}
        search={handleSearchChange}
      />
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
            options={filters}
            optionLabel="label"
            placeholder="Ordenar Por"
          />
        </DivSelect>
        <ButtonsDiv>
          <Buttons onClick={handleFilterChange}>Filtrar</Buttons>
          <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
        </ButtonsDiv>
      </ContainerFilter>
      <DivLine>
        {cardData
          .filter((card) =>
            card.title.toLowerCase().includes(searchValue.toLowerCase())
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
