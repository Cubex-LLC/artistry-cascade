import { Component } from 'cascade';
export interface ISortableProps {
    items: any[];
}
export default class Sortable extends Component<ISortableProps> {
    render(): JSX.Element;
}
