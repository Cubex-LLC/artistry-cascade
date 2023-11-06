import { Component, Elements } from 'cascade';
export interface IToggleProps extends Elements.JSXInputElement {
}
export default class Toggle extends Component<IToggleProps> {
    render(): JSX.Element;
}
