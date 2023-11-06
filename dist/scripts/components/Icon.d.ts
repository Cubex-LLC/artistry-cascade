import { Component } from 'cascade';
export interface IIconProps {
    pack?: string;
    name: string;
}
export default class Icon extends Component<IIconProps> {
    render(): JSX.Element;
}
