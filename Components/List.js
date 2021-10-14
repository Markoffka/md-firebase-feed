import { useEffect } from 'react';
import { useDashboard } from './InitialData';
import { ListItem, ListItemsMap } from './styles';

export function List(props) {
  const { data, onChangeData, onSetSelected, selected } = useDashboard();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json())
      .then((json) => onChangeData(json));
  }, []);

  return (
    <ListItemsMap>
      {data && data.length > 0 ? (
        data.map((el, idx) => (
          <ListItem
            onClick={() => onSetSelected(idx)}
            key={'item' + idx}
            isSelected={el == selected}
            isCompleted={el.completed || false}
          >
            {el.title}
          </ListItem>
        ))
      ) : (
        <>No items</>
      )}
    </ListItemsMap>
  );
}
