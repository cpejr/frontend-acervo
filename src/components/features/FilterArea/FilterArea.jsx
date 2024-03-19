import PropTypes from "prop-types";
import { useGetCategoryType } from "../../../hooks/querys/categoryType";
import { useGetCategoryPrice } from "../../../hooks/querys/categoryPrice";
import {
  ContainerFilter,
  MultipleSelect,
  DivSelect,
  UniSelect,
  ButtonsDiv,
  Buttons,
  ShowTags,
  Tags,
} from "./Styles";

export default function FilterArea({
  types,
  setTypes,
  prices,
  setPrices,
  filter,
  setFilter,
  onFilterClick,
  filterReset,
  setArray,
}) {
  // Set variables
  const { data: categoryType } = useGetCategoryType({
    onError: (err) => {
      console.log(err);
    },
  });
  const { data: categoryPrice } = useGetCategoryPrice({
    onError: (err) => {
      console.log(err);
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
    const newArray = [...prices, ...types];
    setArray(newArray);
  };
  const handleResetFilter = () => {
    setTypes([]);
    setPrices([]);
    setFilter([]);
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
          showClear
          placeholder="Ordenar Por"
          className="w-full md:w-14rem"
        ></UniSelect>
      </DivSelect>
      <ButtonsDiv>
        <Buttons onClick={handleFilterChange}>Filtrar</Buttons>
        <Buttons onClick={handleResetFilter}>Limpar Filtros</Buttons>
      </ButtonsDiv>
    </ContainerFilter>
  );
}

FilterArea.propTypes = {
  onFilterClick: PropTypes.func.isRequired,
  setArray: PropTypes.func.isRequired,
  types: PropTypes.array.isRequired,
  setTypes: PropTypes.func.isRequired,
  prices: PropTypes.array.isRequired,
  setPrices: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.array.isRequired,
  filterReset: PropTypes.func.isRequired,
};
