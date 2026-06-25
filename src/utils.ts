export const noop = () => {}

export const cn = (...classes: string[]) => {
    return classes.join(' ');
}