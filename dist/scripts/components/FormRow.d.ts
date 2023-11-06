import { Component } from 'cascade';
export type FormRowSize = 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'stacked';
export interface IFormRowProps {
    className?: string;
    id?: string;
    screenSize?: FormRowSize;
}
export default class FormRow extends Component<IFormRowProps> {
    render(): JSX.Element;
}
