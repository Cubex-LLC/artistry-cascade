import { Component } from 'cascade';
export interface IScrollableViewProps {
}
export default class ScrollableView extends Component<IScrollableViewProps> {
    bottom: () => Promise<void>;
    render(): JSX.Element;
}
