import { useState } from "react";
import { useGetEventsByCategoryId } from "../../hooks/querys/events";
import useDebounce from "../../services/useDebouce";
import Card from "../../components/features/Card/Card";
import FilterArea from "../../components/features/FilterArea/FilterArea";
import { toast } from "react-toastify";

import {
  Container,
  DivLine,
  Line,
  TrendingEvents,
  EventNotFound,
  Title,
  BackgroundTitle,
} from "./Styles";

import { SearchBar } from "../../components";

export default function Events() {
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [filter, setFilter] = useState([]);
  const [types, setTypes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [categoryIDsArrays, setCategoryIDsArrays] = useState([]);
  const [dateRange, setDateRange] = useState({});
  const { data: events } = useGetEventsByCategoryId({
    id: categoryIDsArrays,
    name: debouncedName,
    type: filter,
    dateRange: dateRange,
    onError: (err) => {
      toast.error(err);
    },
  });

  return (
    <Container>
      <BackgroundTitle>
        <Title>EVENTOS</Title>
      </BackgroundTitle>
      <SearchBar
        value={names}
        search={(e) => setNames(e.target.value)}
        placeholder="Pesquisar Eventos"
      ></SearchBar>
        <FilterArea
          types={types}
          setArray={setCategoryIDsArrays}
          setTypes={setTypes}
          prices={prices}
          setPrices={setPrices}
          filter={filter}
          setFilter={setFilter}
          setNames={setNames}
          isCalendarNeed={true}
          setDateRange={setDateRange}
        ></FilterArea>
      <TrendingEvents>
        <DivLine>
          {events?.length === 0 && (
            <EventNotFound>Nenhum evento encontrado</EventNotFound>
          )}
          <Line>
            {events?.map((card, index) => (
              <Card key={index} data={card} />
            ))}
          </Line>
        </DivLine>
      </TrendingEvents>
    </Container>
  );
}
