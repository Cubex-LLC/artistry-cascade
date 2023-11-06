import { Component, Ref } from 'cascade';
interface IActionBarItem {
    title: string;
    onClick?: () => any;
    link?: string;
}
export interface IActionBarBreadcrumbProps {
    className?: string;
    id?: string;
    items?: IActionBarItem[];
}
export default class ActionBarBreadcrumb extends Component<IActionBarBreadcrumbProps> {
    observer?: IntersectionObserver;
    ref: Ref<HTMLDivElement>;
    afterRender(_node: Element, update: boolean): void;
    afterDispose(): void;
    render(): JSX.Element;
}
export interface IActionBarItemProps {
    observer: IntersectionObserver;
}
export declare class ActionBarItem extends Component<IActionBarItemProps> {
    hidden?: boolean;
    ref: Ref<HTMLDivElement>;
    afterRender(node: Element, update: boolean): void;
    afterDispose(): void;
    render(): JSX.Element;
}
export {};
