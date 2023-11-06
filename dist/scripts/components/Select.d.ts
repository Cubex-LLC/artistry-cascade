import { Component } from 'cascade';
import { DOMEvent } from '../util/BaseEventTarget';
export interface ISelectProps<T, U> {
    id?: string;
    className?: string;
    data: T[];
    template?: (value: T, index: number, data: T[]) => any;
    value?: string | number | string[];
    valueProp?: keyof T;
    displayProp?: keyof T;
    onChange?: (option: T, event?: DOMEvent<HTMLSelectElement>) => any;
    model: U;
    modelProp: keyof U;
    allowEmpty?: boolean;
    emptyValue?: T | string | number | string[];
}
export default class Select<T, U> extends Component<ISelectProps<T, U>> {
    onChange: (event: DOMEvent<HTMLSelectElement>) => void;
    render(): JSX.Element;
}
