import { Component, Elements } from 'cascade';
export interface ICodeProps extends Elements.JSXPreElement {
}
export default class Code extends Component<ICodeProps> {
    render(): JSX.Element;
}
