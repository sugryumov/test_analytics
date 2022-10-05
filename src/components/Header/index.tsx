import { FC } from "react";
import { Dropdown } from "../Dropdown";

const optionsList = [
  {
    id: 1,
    name: "All Pipelines",
  },
  {
    id: 2,
    name: "Sales",
  },
  {
    id: 3,
    name: "Marketing",
  },
  {
    id: 4,
    name: "Partners",
  },
];

export const Header: FC = () => {
  return (
    <div>
      <Dropdown optionsList={optionsList} />
    </div>
  );
};
