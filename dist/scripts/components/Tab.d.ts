import { Component } from 'cascade';
import { ScrollableType } from './Scrollable';
export interface ITabProps {
    className?: string;
    id?: string;
    titles: any[];
    activeIndex?: number;
    onSelectPanel?: (index: any) => void;
    animated?: boolean;
    fade?: boolean;
    safe?: boolean;
    space?: boolean;
    staticHeight?: boolean;
    fillHeight?: boolean;
    scroll?: ScrollableType;
}
export default class Tab extends Component<ITabProps> {
    activeIndex: number;
    selectPanel(index: number): void;
    render(): JSX.Element;
}
