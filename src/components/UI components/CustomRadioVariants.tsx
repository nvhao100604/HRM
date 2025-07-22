import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import type { ChangeEvent } from 'react';
import type { RadioItems } from '../../interface/interfaces';

function CustomRadioVariants({ radioName, radioItems, onSetData }:
  { radioName: string, radioItems: RadioItems[], onSetData: (e: ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <FormControl>
      <FormLabel>{radioName}</FormLabel>
      <RadioGroup defaultValue={radioItems[0].id} name={radioName}
        onChange={onSetData}
      >
        {radioItems && radioItems.map((item) => (
          <Radio
            key={item.id}
            value={item.id}
            label={item.label}
            variant="outlined"
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioVariants;
