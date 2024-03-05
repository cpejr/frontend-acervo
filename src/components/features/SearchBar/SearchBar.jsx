import PropTypes from "prop-types";
import { Input } from "./Styles";

export default function SearchBar({ placeholder, search, value }) {
  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={search}
    ></Input>
  );
}
SearchBar.propTypes = {
  placeholder: PropTypes.array.isRequired,
  search: PropTypes.array.isRequired,
  value: PropTypes.array.isRequired,
};
