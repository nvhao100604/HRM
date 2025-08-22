import { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DayJsToString } from '../../utils';

const DatePickers = ({ labelText, name, initDate, setData }:
    { labelText: string, name: string, initDate: string | null, setData: (e: any) => void }) => {
    const [value, setValue] = useState<Dayjs | null>(dayjs(initDate ?? undefined));

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
                <DatePicker
                    label={labelText}
                    name={name}
                    value={value}
                    onChange={(newValue: any) => {
                        const syntheticEvent = {
                            target: {
                                name: name,
                                value: newValue ? DayJsToString(newValue) : null
                            }
                        }
                        setData(syntheticEvent);
                        setValue(newValue);
                    }}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}

export default DatePickers