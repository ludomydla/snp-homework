import type { ComponentPropsWithoutRef } from 'react';
import { cn, noop } from '../../../utils';
import './Button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant: ButtonVariant;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function Button({children, variant, onClick, ...rest}: ButtonProps) {

    return (
        <button className={cn('button', `button_${variant}`)} onClick={onClick ? onClick : noop} {...rest}>
            {children}
        </button>
    )
}

export default Button;