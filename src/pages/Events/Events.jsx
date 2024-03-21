import { useEffect, useState } from "react";
import { useEventsByCategoryId } from "../../hooks/querys/events";
import useDebounce from "../../services/useDebouce";
import Card from "../../components/features/Card/Card";
import FilterArea from "../../components/features/FilterArea/FilterArea";
import {
  Container,
  DivLine,
  Line,
  TrendingEvents,
  Filter,
  EventNotFound,
} from "./Styles";
import { SearchBar } from "../../components";

export default function Events() {
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [filter, setFilter] = useState([]);
  const [types, setTypes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [categoryIDsArrays, setCategoryIDsArrays] = useState([]);

  const { data: events } = useEventsByCategoryId({
    id: categoryIDsArrays,
    name: debouncedName,
    type: filter,
    onError: (err) => {
      console.log(err);
    },
  });

  return (
    <Container>
      <SearchBar
        value={names}
        search={(e) => setNames(e.target.value)}
        placeholder={"Pesquisar Evento"}
      ></SearchBar>
      <Filter>
        <FilterArea
          types={types}
          setArray={setCategoryIDsArrays}
          setTypes={setTypes}
          prices={prices}
          setPrices={setPrices}
          filter={filter}
          setFilter={setFilter}
        ></FilterArea>
      </Filter>
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
