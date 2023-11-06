import { Component } from 'cascade';
export interface IPagerProps {
    className?: string;
    id?: string;
    index: number;
    count: number;
    showCount: number;
    showArrows?: boolean;
    showEnds?: boolean;
    zeroIndexed?: boolean;
    onClickIndex: (index: number, event: Event) => void;
    onClickEnd?: (event: Event) => void;
}
export default class Pager extends Component<IPagerProps> {
    onClickIndex(index: number, event: Event): void;
    onClickBack: (event: Event) => void;
    onClickForward: (event: Event) => void;
    onClickStart: (event: Event) => void;
    onClickEnd: (event: Event) => void;
    render(): JSX.Element;
}
