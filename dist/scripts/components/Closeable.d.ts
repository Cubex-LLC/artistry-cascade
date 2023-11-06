import { Component } from 'cascade';
export interface ICloseableProps {
    id?: string;
    className?: string;
    closed?: boolean;
}
export default class Closeable extends Component<ICloseableProps> {
    closed: boolean;
    running: boolean;
    animating: boolean;
    height: string;
    runCount: number;
    transitionEnd: (event: TransitionEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterDispose(): void;
    afterProps(updating: boolean): Promise<void>;
    render(): JSX.Element;
}
