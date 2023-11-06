import { Component } from 'cascade';
export interface ICardViewProps {
}
export default class CardView extends Component<ICardViewProps> {
    closed: boolean;
    filled: boolean;
    index: number;
    toggleClosed: () => void;
    toggleFilled: () => void;
    clickNext: () => void;
    clickPrevious: () => void;
    render(): JSX.Element;
}
