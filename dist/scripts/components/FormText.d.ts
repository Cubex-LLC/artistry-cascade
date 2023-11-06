import { Component } from 'cascade';
import { AlignType } from '../util/Align';
export type FormTextTheme = 'default' | 'success' | 'info' | 'warning' | 'danger';
export interface IFormTextProps {
    className?: string;
    id?: string;
    fill?: boolean;
    theme?: FormTextTheme;
    align?: AlignType;
}
export default class FormText extends Component<IFormTextProps> {
    render(): JSX.Element;
}
