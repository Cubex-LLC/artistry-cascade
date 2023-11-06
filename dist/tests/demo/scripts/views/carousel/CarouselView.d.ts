import { Component } from 'cascade';
export interface ICarouselViewProps {
}
export default class CarouselView extends Component<ICarouselViewProps> {
    activeIndex: number;
    nextCarouselSlide: () => void;
    backCarouselSlide: () => void;
    render(): JSX.Element;
}
