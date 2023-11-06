import { Component } from 'cascade';
import { AlignType } from '../util/Align';
import { FormTextTheme } from './FormText';
export interface IFormGroupProps {
    className?: string;
    id?: string;
    label?: any;
    text?: any;
    textAlign?: AlignType;
    theme?: FormTextTheme;
    nonLabel?: boolean;
    inline?: boolean;
    stacked?: boolean;
}
export default class FormGroup extends Component<IFormGroupProps> {
    render(): JSX.Element;
}
