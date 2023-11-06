import { Component } from 'cascade';
export interface IMenuBarViewProps {
}
export default class MenuBarView extends Component<IMenuBarViewProps> {
    userMenuOpen: boolean;
    toggleUserMenu: (event: MouseEvent) => void;
    closeUserMenu: (event: MouseEvent) => void;
    render(): JSX.Element;
}
