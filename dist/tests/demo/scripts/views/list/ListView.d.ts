import { Component } from 'cascade';
export interface ITableViewProps {
}
interface IListData {
    ingredient: string;
    quantity: string | number;
    unit: string;
}
export default class TableView extends Component<ITableViewProps> {
    searchValue: string;
    showOptions?: boolean;
    options?: IListData[];
    onChange: (event: Event) => Promise<void>;
    onSelectOption: (event: KeyboardEvent | MouseEvent, value?: string) => void;
    onSearch: (event: KeyboardEvent | MouseEvent, value?: string) => void;
    onClose: (event: Event) => void;
    altAction?: (option: string) => any;
    render(): JSX.Element;
}
export {};
