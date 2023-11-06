import { Component, Ref } from 'cascade';
import { IGridExternalProps } from './Grid';
import { IScrollableExternalProps } from './Scrollable';
export type ModalSize = 'none' | 'all' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface IModalProps extends IGridExternalProps, IScrollableExternalProps {
    className?: string;
    id?: string;
    open: boolean;
    onClose?: (event: Event) => void;
    onConfirm?: (event: Event) => void;
    closeable?: boolean;
    closeButton?: any;
    title?: any;
    header?: any;
    footer?: any;
    animation?: 'center' | 'top' | 'right' | 'bottom' | 'left';
    lockable?: boolean;
    locked?: boolean;
    space?: boolean;
    background?: boolean;
    screenSize?: ModalSize | ModalSize[];
}
export default class Modal extends Component<IModalProps> {
    open: boolean;
    remove: boolean;
    rootRef: Ref<HTMLDivElement>;
    constructor(props: IModalProps, ...children: any[]);
    preventClick(event: Event): void;
    close: (event: Event) => false | void;
    confirm: (event: Event) => false | void;
    transitionEnd: (event: TransitionEvent) => void;
    onScroll: (event: MouseEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterProps(mounted: boolean): Promise<void>;
    afterDispose(element: Node): void;
    render(): JSX.Element;
}
