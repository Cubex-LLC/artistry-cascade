import { Component } from 'cascade';
export interface ITimeInputProps<T = any> extends Partial<HTMLInputElement> {
    seconds?: boolean;
    value?: string;
    fill?: boolean;
    model?: T;
    modelProp?: keyof T;
}
export default class TimeInput extends Component<ITimeInputProps> {
    render(): JSX.Element;
}
