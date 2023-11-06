import { Component } from 'cascade';
import { AlignType } from '../util/Align';
export interface ICellProps {
    className?: string;
    id?: string;
    columns?: number;
    offset?: number;
    align?: AlignType;
    width?: number | string;
    leftMargin?: number | string;
}
export default class Cell extends Component<ICellProps> {
    render(): JSX.Element;
}
