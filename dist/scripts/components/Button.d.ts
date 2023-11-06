import { Component, Elements } from 'cascade';
import { ITemplate } from './ITemplate';
export interface IButtonProps extends Elements.JSXButtonElement {
    id?: string;
    className?: string;
    type?: 'button' | 'submit' | 'reset';
    theme?: 'default' | 'primary' | 'danger';
    displaySize?: 'default' | 'small' | 'large';
    display?: 'default' | 'textonly' | 'outline' | 'underline';
    fill?: boolean;
    tooltip?: string;
    tooltipDirection?: 'top' | 'right' | 'bottom' | 'left';
    tooltipOpen?: boolean;
    popover?: ITemplate;
    popoverDirection?: 'top' | 'right' | 'bottom' | 'left';
    popoverAlign?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    popoverMenu?: boolean;
    popoverOpen?: boolean;
    popoverFill?: boolean;
    popoverSpace?: boolean;
    onPopoverClose?: (event: Event) => boolean | void;
    lockContent?: any;
    locked?: boolean;
    down?: boolean;
    link?: boolean;
    noCaps?: boolean;
    noTrigger?: boolean;
    noWrap?: boolean;
    noFocus?: boolean;
}
export default class Button extends Component<IButtonProps> {
    private closeHandle;
    close(event: Event): void;
    afterProps(updating: boolean): void;
    afterDispose(): void;
    render(): JSX.Element;
}
