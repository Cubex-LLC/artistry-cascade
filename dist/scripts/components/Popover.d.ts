import { Component } from 'cascade';
export interface IPopoverProps {
    className?: string;
    id?: string;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    align?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    fill?: boolean;
    open?: boolean;
    closed?: boolean;
    preventClick?: boolean;
    space?: boolean;
}
export default class Popover extends Component<IPopoverProps> {
    preventClick(event: Event): void;
    render(): JSX.Element;
}
