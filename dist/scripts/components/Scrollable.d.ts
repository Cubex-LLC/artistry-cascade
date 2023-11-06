import { Component, Ref } from 'cascade';
export type ScrollableType = 'auto' | 'both' | 'none' | 'x' | 'y' | 'xAlways' | 'yAlways' | 'xNever' | 'yNever';
export declare enum ScrollableTypeEnum {
    auto = "auto",
    both = "both",
    none = "none",
    x = "x",
    y = "y",
    xAlways = "x-always",
    yAlways = "y-always",
    xNever = "x-never",
    yNever = "y-never"
}
export interface IScrollableExternalProps {
    scrollType?: ScrollableType;
    bumper?: number;
    onscroll?: (event?: MouseEvent) => any;
    onTopEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onTopExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
}
export interface IScrollableProps {
    id?: string;
    className?: string;
    type?: ScrollableType;
    height?: number | string;
    maxHeight?: number | string;
    bumper?: number | string;
    onscroll?: (event?: MouseEvent) => any;
    onTopEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onTopExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onRightExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onBottomExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftEnter?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
    onLeftExit?: (entries: IntersectionObserverEntry, observer: IntersectionObserver) => any;
}
export default class Scrollable extends Component<IScrollableProps> {
    root: Ref<HTMLDivElement>;
    topBumper: Ref<HTMLDivElement>;
    rightBumper: Ref<HTMLDivElement>;
    bottomBumper: Ref<HTMLDivElement>;
    leftBumper: Ref<HTMLDivElement>;
    rootObserver: IntersectionObserver;
    topIntersected: boolean;
    rightIntersected: boolean;
    bottomIntersected: boolean;
    leftIntersected: boolean;
    onScroll: (event: MouseEvent) => void;
    afterRender(element: Node, updating: boolean): void;
    afterDispose(): void;
    render(): JSX.Element;
}
