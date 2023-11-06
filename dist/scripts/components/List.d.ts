import { Component } from 'cascade';
export interface IListProps<T> {
    id?: string;
    className?: string;
    data: T[];
    space?: boolean;
    active?: number;
    selected?: number[];
    template?: (item: T, index?: number) => any;
}
export default class List<T> extends Component<IListProps<T>> {
    render(): JSX.Element;
}
