import { Select, SelectChangeEvent } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';

interface AbSelectProps {
  label: string;
  value: string;
  handleChange: (e: SelectChangeEvent<string | number>) => void;
  items: string[] | number[];
  all?: boolean;
}

const AbSelect = ({ label, value, handleChange, items, all = true }: AbSelectProps) => {
  return (
    <Select
      label={label}
      value={value}
      onChange={handleChange}
      sx={{ width: '100%', color: '#fff', textAlign: 'center' }}
    >
      {all && (
        <MenuItem key={'all'} value={'all'}>
          all
        </MenuItem>
      )}
      {items.map((item, i) => (
        <MenuItem key={i} value={item}>
          {item}
        </MenuItem>
      ))}
    </Select>
  );
};

export default AbSelect;