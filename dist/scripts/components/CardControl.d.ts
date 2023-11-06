import { Component } from 'cascade';
export interface ICardControlProps {
    id?: string;
    className?: string;
    title?: string;
    label?: boolean;
    width?: number | string;
    stacked?: boolean;
}
export default class CardControl extends Component<ICardControlProps> {
    render(): JSX.Element;
}
