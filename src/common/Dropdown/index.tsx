import { FC, useState } from "react";
import { Arrow as SVGArrow } from "../SVGIcons";
import styles from "./index.module.css";

interface IOptionsList {
  id: number;
  name: string;
}

interface IDropdownProps {
  optionsList: IOptionsList[];
}

export const Dropdown: FC<IDropdownProps> = ({ optionsList }) => {
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState(optionsList[0]);

  const toggleOptions = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const setSelectedThenCloseDropdown = (id: number) => () => {
    const findActiveOption = optionsList.find((option) => option.id === id) || {
      id: 1,
      name: "",
    };

    setSelectedOption(findActiveOption);
    setIsOptionsOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button type="button" onClick={toggleOptions} className={styles.button}>
        {selectedOption.name}
        <div
          className={
            isOptionsOpen ? `${styles.arrow} ${styles.expanded}` : styles.arrow
          }
        >
          <SVGArrow />
        </div>
      </button>

      <ul className={`${styles.list} ${isOptionsOpen ? styles.show : ""}`}>
        {optionsList
          .filter((el) => el.id !== selectedOption.id)
          .map(({ name, id }) => (
            <li
              key={id}
              className={styles.item}
              onClick={setSelectedThenCloseDropdown(id)}
            >
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
