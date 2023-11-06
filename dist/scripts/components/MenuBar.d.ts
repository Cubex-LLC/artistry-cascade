import { Component } from 'cascade';
export interface IMenuBarProps {
    className?: string;
    id?: string;
    title?: any;
    top?: boolean;
    open?: boolean;
    onOpen?: (event: MouseEvent) => boolean | void;
}
export default class MenuBar extends Component<IMenuBarProps> {
    container: HTMLDivElement;
    onOpen(event: MouseEvent): void;
    render(): JSX.Element;
}
