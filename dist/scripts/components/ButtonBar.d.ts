import { Component } from 'cascade';
export interface IButtonBarProps {
    className?: string;
    id?: string;
}
export default class ButtonBar extends Component<IButtonBarProps> {
    render(): JSX.Element;
}
