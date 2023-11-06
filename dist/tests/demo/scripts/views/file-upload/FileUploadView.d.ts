import { Component } from 'cascade';
export interface ITableViewProps {
}
export default class TableView extends Component<ITableViewProps> {
    select: (files: FileList) => Promise<any>;
    render(): JSX.Element;
}
