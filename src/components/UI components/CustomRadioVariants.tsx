import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import type { RadioItems } from '../../interface/interfaces';

function CustomRadioVariants({ name, radioName, radioItems, radioInitValue, onSetData }:
  { name: string, radioName: string, radioItems: RadioItems[], radioInitValue: string, onSetData: (e: any) => void }) {
  return (
    <FormControl>
      <FormLabel>{radioName}</FormLabel>
      <RadioGroup defaultValue={radioInitValue} name={name}
        onChange={onSetData}
      >
        <div className='flex items-stretch place-content-between'>
          {radioItems && radioItems.map((item) => (
            <div key={item.id} className='w-1/3'>
              <Radio
                value={item.label}
                label={item.label}
                variant="outlined"
              />
            </div>
          ))}
        </div>
      </RadioGroup>
    </FormControl>
  );
}

export default CustomRadioVariants;
