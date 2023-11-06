import { Component, Ref } from 'cascade';
import { IGridExternalProps } from './Grid';
import { IScrollableExternalProps } from './Scrollable';
export interface IDrawerProps extends IGridExternalProps, IScrollableExternalProps {
    className?: string;
    id?: string;
    direction?: 'top' | 'right' | 'bottom' | 'left';
    open: boolean;
    full?: boolean;
    onClose: (event: Event) => void;
    background?: boolean;
    space?: boolean;
}
export default class Drawer extends Component<IDrawerProps> {
    open: boolean;
    remove: boolean;
    container: HTMLDivElement;
    rootRef: Ref<HTMLDivElement>;
    constructor(props: IDrawerProps, ...children: any[]);
    preventClick(event: Event): void;
    close: (event: Event) => void;
    transitionEnd: (event: TransitionEvent) => void;
    onScroll: (event: MouseEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterProps(mounted: boolean): Promise<void>;
    afterDispose(element: Node): void;
    render(): JSX.Element;
}
