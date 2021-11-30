/* eslint-disable import/no-anonymous-default-export */
import Filter from "../ui/filter";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { useRef, useState } from "react";
import useOnClickOutside from "../hooks/useClickOutside";

const ex = ["T-shirts", "Tops", "Jeans"];

export default ({ name, values = ex, modifiers }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const ref = useRef();

  useOnClickOutside(ref, () => setIsFilterOpen(false));

  const handleClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  return (
    <Filter ref={ref}>
      <Filter.Select modifiers={modifiers} onClick={handleClick}>
        {name} {isFilterOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Filter.Select>
      {isFilterOpen && (
        <Filter.Dropdown modifiers={modifiers}>
          {values.map((value, index) => (
            <Filter.Item>
              <Filter.Text>{value}</Filter.Text>
              <Filter.Checkbox type="checkbox"></Filter.Checkbox>
            </Filter.Item>
          ))}
        </Filter.Dropdown>
      )}
    </Filter>
  );
};
