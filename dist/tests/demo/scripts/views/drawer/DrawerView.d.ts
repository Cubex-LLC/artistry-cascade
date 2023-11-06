import { Component } from 'cascade';
export interface IDrawerViewProps {
}
export default class DrawerView extends Component<IDrawerViewProps> {
    drawerOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
    render(): JSX.Element;
}
