import { Component } from 'cascade';
export interface ICardTitleProps {
    id?: string;
    className?: string;
}
export default class CardTitle extends Component<ICardTitleProps> {
    render(): JSX.Element;
}
