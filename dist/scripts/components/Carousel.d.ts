import { Component } from 'cascade';
import { ScrollableType } from './Scrollable';
export interface ICarouselProps {
    className?: string;
    id?: string;
    activeIndex: number;
    animation?: 'slide' | 'slide-fade' | 'fade' | 'flip';
    safe?: boolean;
    staticHeight?: boolean;
    fillHeight?: boolean;
    scroll?: ScrollableType;
    space?: boolean;
}
export default class Carousel extends Component<ICarouselProps> {
    container: HTMLElement;
    child: HTMLElement;
    height: string;
    activeIndex: number;
    previousActiveIndex: number;
    animating: boolean;
    selected: boolean;
    running: boolean;
    runCount: number;
    transitionCount: number;
    transitionEnd: (event: TransitionEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterProps(updating: boolean): Promise<void>;
    afterDispose(): void;
    render(): JSX.Element;
}
