import { Component } from 'cascade';
export interface IFillableProps {
    id?: string;
    className?: string;
    filled?: boolean;
    card?: boolean;
}
export default class Fillable extends Component<IFillableProps> {
    filled: boolean;
    height: string;
    width: string;
    top: string;
    right: string;
    bottom: string;
    left: string;
    animating: boolean;
    running: boolean;
    runCount?: number;
    constructor(props: IFillableProps, ...children: any[]);
    transitionEnd: (event: TransitionEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterProps(mounted: boolean): Promise<void>;
    afterDispose(): void;
    render(): JSX.Element;
}
