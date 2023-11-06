import { Component } from 'cascade';
import { IDisableable } from '../abilities/Disabled';
import { IGridExternalProps } from './Grid';
export type CardType = 'default' | 'success' | 'info' | 'warning' | 'danger';
export type CardHandle = 'default' | 'top' | 'right' | 'bottom' | 'left';
export interface ICardProps extends IGridExternalProps, IDisableable {
    id?: string;
    className?: string;
    header?: any;
    footer?: any;
    space?: boolean;
    fill?: boolean;
    nav?: any;
    type?: CardType;
    handle?: CardHandle;
    square?: boolean;
    clickable?: boolean;
    onClick?: (event: MouseEvent) => any;
}
export default class Card extends Component<ICardProps> {
    onClick: (event: MouseEvent) => void;
    render(): JSX.Element;
}
