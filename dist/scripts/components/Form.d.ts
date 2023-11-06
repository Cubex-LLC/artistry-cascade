import { Component, Elements } from 'cascade';
export type FormSize = 'none' | 'small' | 'medium' | 'large' | 'x-large' | 'stacked';
export interface IFormProps extends Elements.JSXFormElement {
    size?: FormSize;
    lockable?: boolean;
    locked?: boolean;
    nonForm?: boolean;
    onEnter?: (event: KeyboardEvent) => any;
    onEscape?: (event: KeyboardEvent) => any;
}
export default class Form extends Component<IFormProps> {
    onkeydown(event: KeyboardEvent): void;
    render(): JSX.Element;
}
