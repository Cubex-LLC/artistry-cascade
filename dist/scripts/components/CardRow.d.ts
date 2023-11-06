import { Component } from 'cascade';
import { AlignType } from '../util/Align';
export interface ICardRowProps {
    id?: string;
    className?: string;
    align?: AlignType;
}
export default class CardRow extends Component<ICardRowProps> {
    render(): JSX.Element;
}
