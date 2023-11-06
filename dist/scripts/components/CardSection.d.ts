import { Component } from 'cascade';
export interface ICardSectionProps {
    id?: string;
    className?: string;
    multiColumn?: boolean;
    centered?: boolean;
}
export default class CardSection extends Component<ICardSectionProps> {
    render(): JSX.Element;
}
