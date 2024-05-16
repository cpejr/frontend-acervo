import PropTypes from "prop-types";
import { useGetCategoryType } from "../../../hooks/querys/categoryType";
import { useGetCategoryPrice } from "../../../hooks/querys/categoryPrice";
import { toast } from "react-toastify";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
  Calendar,
} from "./Styles";
import { useState } from "react";

export default function FilterArea({
  types,
  setTypes,
  prices,
  setPrices,
  filter,
  setFilter,
  setArray,
  setNames,
  isCalendarNeed,
  setDateRange,
}) {
  // Set variables
  const [dates, setDates] = useState(null);

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
    { label: "Data", value: "date" },
    { label: "Nome", value: "name" },
  ];
  const transformArrayItems = (OriginalArray) => {
    const newArray = OriginalArray?.map((item) => ({
      value: item?._id,
      label: item?.name,
    }));
    return newArray;
  };
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
    const newArray = [...prices, ...types];
    setArray(newArray);
    setDateRange(formattedDateRange);
  };

  const handleResetFilter = () => {
    setTypes([]);
    setPrices([]);
    setFilter([]);
    setArray([]);
    setNames([]);
    setDates([]);
    setDateRange({});
  };

  return (
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

        <UniSelect
          value={filter}
          onChange={(e) => setFilter(e.value)}
          options={filters}
          optionLabel="label"
          placeholder="Ordenar Por"
          className="w-full md:w-14rem"
        ></UniSelect>
      </DivSelect>
      {isCalendarNeed ? (
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
      ) : null}

      <ButtonsDiv>
        <Buttons onClick={handleFilterChange}>Filtrar</Buttons>
        <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}

FilterArea.propTypes = {
  onFilterClick: PropTypes.func,
  setArray: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  setTypes: PropTypes.func.isRequired,
  prices: PropTypes.array.isRequired,
  setPrices: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array.isRequired,
  setNames: PropTypes.func.isRequired,
  filterReset: PropTypes.func,
  isCalendarNeed: PropTypes.bool,
  setDateRange: PropTypes.func,
};
