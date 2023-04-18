import classNames from 'classnames';

import styles from './List.module.scss';

const List = ({ isVisible, items, setSelectedItem, appear }) => {
  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <ul className={classNames(styles.list, styles[appear], isVisible && styles.active)}>
      {items.map((item) => (
        <li key={item} onClick={() => handleItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
