import { Component, Elements } from 'cascade';
export interface IRangeProps extends Elements.JSXInputElement {
}
export default class Range extends Component<IRangeProps> {
    render(): JSX.Element;
}
