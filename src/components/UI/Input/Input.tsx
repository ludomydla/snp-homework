import { useId, type ComponentPropsWithoutRef } from 'react';
import './Input.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
    label: string;
    value: string;
    id?: string;
    onChange: (value: string) => void;
}

function Button({label, id, value, onChange, ...rest}: InputProps) {

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        onChange(ev.target.value)
    }

    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
        <div className="input_wrapper">
            <label className="input_label" htmlFor={inputId}>{label}</label>
            <input id={inputId} className="input_input" value={value} onChange={handleChange} {...rest}>
            </input>
        </div>
    )
}

export default Button;