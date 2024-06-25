import { useState } from "react";
import { useGetEventsByCategoryId } from "../../hooks/querys/events";
import useDebounce from "../../services/useDebouce";
import { useGetCategoryType } from "../../hooks/querys/categoryType";
import { useGetCategoryPrice } from "../../hooks/querys/categoryPrice";
import Card from "../../components/features/Card/Card";
import { toast } from "react-toastify";

import {
  Container,
  DivLine,
  Line,
  TrendingEvents,
  EventNotFound,
  Title,
  BackgroundTitle,
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Calendar,
  Buttons,
} from "./Styles";

import { SearchBar } from "../../components";

export default function Events() {
  const [names, setNames] = useState("");
  const debouncedName = useDebounce(names);
  const [filter, setFilter] = useState([]);
  const [dates, setDates] = useState(null);
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

  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      toast.error(err);
    },
  });
  const { data: categoryPrice } = useGetCategoryPrice({
    onError: (err) => {
      toast.error(err);
    },
  });

  const filters = [
    { label: "Próximos eventos", value: "new" },
    { label: "Nome", value: "name" },
  ];

  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };

  function handleFilterChange() {
    if (dates) {
      let formattedDateRange;
      const [initialDate, finalDate] = dates;
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

    let ids = [];

    for (let i = 0; i < prices.length; i++) {
      ids.push(prices[i]);
    }

    for (let i = 0; i < types.length; i++) {
      ids.push(types[i]);
    }

    setCategoryIDsArrays(ids);
  }

  const handleResetFilter = () => {
    setTypes([]);
    setPrices([]);
    setFilter([]);
    setDateRange([]);
    setDates();
    setCategoryIDsArrays([]);
  };

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
      <ContainerFilter>
        <DivSelect>
          <MultipleSelect
            value={types}
            onChange={(e) => setTypes(e.value)}
            options={transformArrayItems(categoryType)}
            optionLabel="label"
            placeholder="Escolha o tipo"
            className="w-full md:w-20rem"
            filter
          />
          <MultipleSelect
            value={prices}
            onChange={(e) => setPrices(e.value)}
            options={transformArrayItems(categoryPrice)}
            optionLabel="label"
            placeholder="Escolha o preço"
            className="w-full md:w-20rem"
            filter
          />

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
            value={filter}
            onChange={(e) => setFilter(e.value)}
            options={filters}
            showClear
            optionLabel="label"
            placeholder="Ordenar Por"
            className="w-full md:w-14rem"
          ></UniSelect>
        </DivSelect>

        <ButtonsDiv>
          <Buttons onClick={handleFilterChange}>Filtrar</Buttons>
          <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
        </ButtonsDiv>
      </ContainerFilter>
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
