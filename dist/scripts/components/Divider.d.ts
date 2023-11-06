import { Component } from 'cascade';
export interface IDividerProps {
    className?: string;
    id?: string;
}
export default class Divider extends Component<IDividerProps> {
    render(): JSX.Element;
}
