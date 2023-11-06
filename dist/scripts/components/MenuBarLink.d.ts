import { Component } from 'cascade';
export interface IMenuBarLinkProps {
    className?: string;
    id?: string;
    title?: any;
    href?: string;
    active?: boolean;
}
export default class MenuBarLink extends Component<IMenuBarLinkProps> {
    render(): JSX.Element;
}
