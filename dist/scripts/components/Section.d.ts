import { Component, Elements } from 'cascade';
import { IGridExternalProps } from './Grid';
export interface ISectionProps extends Elements.JSXElement, IGridExternalProps {
    header: any;
    footer?: any;
    lockable?: boolean;
    locked?: boolean;
    closeable?: boolean;
    closed?: boolean;
    space?: boolean;
    headerSpace?: boolean;
    footerSpace?: boolean;
    relative?: boolean;
    onClose?: (closed: boolean) => void;
}
export default class Section extends Component<ISectionProps> {
    closed: boolean;
    running: boolean;
    animating: boolean;
    height: string;
    runCount: number;
    close: () => void;
    transitionEnd: (event: TransitionEvent) => void;
    afterRender(node: HTMLDivElement, updating: boolean): void;
    afterProps(updating: boolean): Promise<void>;
    afterDispose(): void;
    render(): JSX.Element;
}
