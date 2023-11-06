import { Component } from 'cascade';
export interface IRowProps {
    className?: string;
    id?: string;
    reverse?: boolean;
}
export default class Row extends Component<IRowProps> {
    render(): JSX.Element;
}
