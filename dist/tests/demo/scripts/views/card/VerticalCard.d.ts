import { Component } from 'cascade';
export interface IVerticalCardProps {
}
export default class VerticalCard extends Component<IVerticalCardProps> {
    image: string;
    closed: boolean;
    toggleClosed: () => void;
    render(): JSX.Element;
}
