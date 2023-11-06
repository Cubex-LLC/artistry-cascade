import { Component } from 'cascade';
export interface IActionBarProps {
    className?: string;
    id?: string;
    direction?: 'forward' | 'reverse';
    align?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    displaySize?: 'default' | 'small' | 'large';
}
export default class ActionBar extends Component<IActionBarProps> {
    render(): JSX.Element;
}
