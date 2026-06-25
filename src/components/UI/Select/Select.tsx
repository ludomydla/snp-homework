import { useId, type ComponentPropsWithoutRef } from 'react';
import './Select.css';

export type SelectItem = {value: string, label: string};

type SelectProps = Omit<ComponentPropsWithoutRef<'select'>, 'onChange'> & {
    options: SelectItem[];
    label: string;
    id?: string;
    onChange: (value: string) => void;
}

function Select({options, label, id, onChange, ...rest}: SelectProps) {

    const handleChange = (ev: React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        onChange(ev.target.value)
    }

    const selectId = id ? id : useId();

    return (
        <div className="select_wrapper">
            <label className="select_label" htmlFor={selectId}>{label}</label>
            <select className="select_select" id={selectId} onChange={handleChange} {...rest}>
                {options.map((option, indx) => (
                    <option key={indx} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default Select;