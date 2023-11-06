import { Component, Elements } from 'cascade';
import { DOMEvent } from '../util/BaseEventTarget';
export interface IInputProps<T> extends Elements.JSXInputElement {
    number?: boolean;
    fill?: boolean;
    mask?: string;
    model?: T;
    modelProp?: keyof T;
    displaySize?: 'default' | 'small' | 'large';
}
export default class Input<T> extends Component<IInputProps<T>> {
    oninput: (event: DOMEvent<HTMLInputElement>) => void;
    render(): JSX.Element;
}
