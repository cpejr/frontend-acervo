import { useEffect, useState } from "react";
import { useEventsByCategoryId } from "../../hooks/querys/events";
import { useGetCategoryTypeByName } from "../../hooks/querys/categoryType";
import useDebounce from "../../services/useDebouce";
import { toast } from "react-toastify";
import Card from "../../components/features/Card/Card";
import FilterArea from "../../components/features/FilterArea/FilterArea";
import {
  Container,
  DivLine,
  Line,
  TrendingTools,
  Filter,
  Characteristics,
  Prices,
  DivSelect,
  Title,
  StyledCheckbox,
  UniSelect,
  EventNotFound,
} from "./Styles";
import { SearchBar } from "../../components";

export default function Events() {
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [filter, setFilter] = useState([]);
  const [types, setTypes] = useState([]);
  const [prices, setPrices] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);

  const { data: events } = useEventsByCategoryId({
    name: debouncedName,
    type: filter,
    onError: (err) => {
      console.log(err);
    },
  });

  const filterEvents = () => {
    if (events && types.length > 0) {
      const filtered = events.filter((event) =>
        filterEventByCategory(event, types, prices)
      );
      setFilteredEvents(filtered);
    } else {
      setFilteredEvents(events);
    }
  };

  const filterEventByCategory = (events, types, prices) => {
    return (
      events.find((event) => {
        const findTypes = types.every((categoria) =>
          event.id_categoryType.includes(categoria)
        );
        const findPrices = prices.every((categoria) =>
          event.id_categoryType.includes(categoria)
        );
        return findTypes && findPrices;
      }) !== undefined
    );
  };
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
          setTypes={setTypes}
          prices={prices}
          setPrices={setPrices}
          onFilterClick={filterEvents}
          filter={filter}
          setFilter={setFilter}
        ></FilterArea>
      </Filter>
      <TrendingTools>
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
      </TrendingTools>
    </Container>
  );
}
