import { Component } from 'cascade';
export interface IBreadcrumbs {
    id?: string;
    className?: string;
}
export default class Breadcrumbs extends Component<IBreadcrumbs> {
    render(): JSX.Element;
}
