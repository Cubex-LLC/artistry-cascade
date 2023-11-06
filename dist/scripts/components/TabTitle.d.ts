import { Component } from 'cascade';
export interface ITabTitleProps {
    className?: string;
    id?: string;
    title: any;
    active?: boolean;
    onSelectPanel?: (event: MouseEvent) => boolean | void;
}
export default class TabTitle extends Component<ITabTitleProps> {
    selectPanel: (event: MouseEvent) => boolean | void;
    render(): JSX.Element;
}
