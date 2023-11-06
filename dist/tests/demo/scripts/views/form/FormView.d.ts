import { Component } from 'cascade';
export interface IFormViewProps {
}
export default class FormView extends Component<IFormViewProps> {
    date: Date;
    amount: number;
    selectValue: string;
    render(): JSX.Element;
}
