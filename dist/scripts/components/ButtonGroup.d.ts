import { Component } from 'cascade';
export interface IButtonGroupProps {
    className?: string;
    id?: string;
    fill?: boolean;
}
export default class ButtonGroups extends Component<IButtonGroupProps> {
    render(): JSX.Element;
}
