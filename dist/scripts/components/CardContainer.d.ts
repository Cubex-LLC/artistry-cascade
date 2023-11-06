import { Component } from 'cascade';
export interface ICardContainerProps {
    id?: string;
    className?: string;
    space?: boolean;
    minWidth?: number | string;
    maxWidth?: number | string;
}
export default class CardContainer extends Component<ICardContainerProps> {
    render(): JSX.Element;
}
