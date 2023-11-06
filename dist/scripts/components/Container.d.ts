import { Component } from 'cascade';
export type ContainerSize = 'none' | 'all' | 'small' | 'medium' | 'large' | 'x-large';
export interface IContainerProps {
    className?: string;
    id?: string;
    menuBarTop?: boolean;
    screenSize?: ContainerSize | ContainerSize[];
}
export default class Container extends Component<IContainerProps> {
    render(): JSX.Element;
}
