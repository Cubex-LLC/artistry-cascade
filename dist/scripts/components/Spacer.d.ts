import { Component } from 'cascade';
export interface ISpacerProps {
    className?: string;
    id?: string;
    list?: boolean;
}
export default class Spacer extends Component<ISpacerProps> {
    render(): JSX.Element;
}
