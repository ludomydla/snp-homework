import { useId, type ComponentPropsWithoutRef } from 'react';
import './Input.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

type InputProps = Omit<ComponentPropsWithoutRef<'input'>, 'onChange'> & {
    label: string;
    id?: string;
    onChange: (value: string) => void;
}

function Button({label, id, onChange, ...rest}: InputProps) {

    const handleChange = (ev: React.ChangeEvent<HTMLInputElement, HTMLInputElement>) => {
        onChange(ev.target.value)
    }

    const inputId = id ? id : useId();

    return (
        <div className="input_wrapper">
            <label className="input_label" htmlFor={inputId}>{label}</label>
            <input id={inputId} className="input_input" onChange={handleChange} {...rest}>
            </input>
        </div>
    )
}

export default Button;