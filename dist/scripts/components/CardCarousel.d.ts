import { Component, Ref } from 'cascade';
import { ICarouselProps } from './Carousel';
export interface ICardCarouselProps extends ICarouselProps {
    minWidth?: number;
    maxWidth?: number;
    cardSpacing?: number;
    carouselSpacing?: number;
    onChangeSize?: (index: number, slideSize?: number, oldSlideSize?: number) => any;
}
export default class CardCarousel extends Component<ICardCarouselProps> {
    rootRef: Ref<HTMLDivElement>;
    initialized: boolean;
    slideSize: number;
    afterRender(element: Node, updating: boolean): void;
    afterDispose(): void;
    onChangeSize: (slideSize: number, oldSlideSize: number) => void;
    resizeHandler: () => void;
    render(): JSX.Element;
}
