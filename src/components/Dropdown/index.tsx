import { FC, useState } from 'react';
import { Arrow as SVGArrow } from '../SVGIcons';
import styles from './index.module.css';

interface IDropdownItem {
  id: number;
  name: string;
}

interface IDropdownProps {
  value: string;
  dropdownList: IDropdownItem[];
  onChangeDropdown: (value: string) => void;
}

export const Dropdown: FC<IDropdownProps> = ({ value, dropdownList, onChangeDropdown }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<IDropdownItem>(
    () => dropdownList.find(({ name }) => name === value)!
  );

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const setSelectedThenCloseDropdown = (id: number) => () => {
    const findActiveOption = dropdownList.find((item) => item.id === id)!;

    onChangeDropdown(findActiveOption.name);

    setSelectedItem(findActiveOption);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.dropdown}>
      <button type="button" onClick={toggleDropdown} className={styles.button}>
        {selectedItem?.name}
        <div className={isDropdownOpen ? `${styles.arrow} ${styles.expanded}` : styles.arrow}>
          <SVGArrow />
        </div>
      </button>

      <ul className={`${styles.list} ${isDropdownOpen ? styles.show : ''}`}>
        {dropdownList
          .filter((item) => item.id !== selectedItem?.id)
          .map(({ name, id }) => (
            <li key={id} className={styles.item} onClick={setSelectedThenCloseDropdown(id)}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
};
