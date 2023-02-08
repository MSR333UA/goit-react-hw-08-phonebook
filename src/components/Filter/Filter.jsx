import { Input, Label } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { changeFilterAction } from 'redux/filter/slice.filter';

export const Filter = () => {
  const value = useSelector(state => state.filter.search);
  const dispatch = useDispatch();

  const handleChangeFilter = e => {
    const { value } = e.target;
    dispatch(changeFilterAction(value));
  };

  return (
    <Label>
      Find contacts by name
      <Input type="text" value={value} onChange={handleChangeFilter} />
    </Label>
  );
};
