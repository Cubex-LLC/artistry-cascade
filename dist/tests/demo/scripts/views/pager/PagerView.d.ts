import { Component } from 'cascade';
export interface IPagerViewProps {
}
export default class PagerView extends Component<IPagerViewProps> {
    index: number;
    count: number;
    onClickIndex: (index: number, event: Event) => void;
    onClickBack: (event: Event) => void;
    onClickForward: (event: Event) => void;
    onClickStart: (event: Event) => void;
    onClickEnd: (event: Event) => void;
    render(): JSX.Element;
}
