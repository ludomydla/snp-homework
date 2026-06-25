import type { ComponentPropsWithoutRef } from 'react';
import { cn, noop } from '../utils';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant: ButtonVariant;
    onClick?: () => void;
}

function Button({children, variant, onClick}: ButtonProps) {

    return (
        <button className={cn('button', `button_${variant}`)} onClick={onClick ? onClick : noop}>
            {children}
        </button>
    )
}

export default Button;