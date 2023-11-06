import { Component } from 'cascade';
export interface ICardNavigationProps {
    id?: string;
    className?: string;
    align?: 'start' | 'end';
}
export default class CardNavigation extends Component<ICardNavigationProps> {
    render(): JSX.Element;
}
