import { Component } from 'cascade';
import { ITemplate } from './ITemplate';
export interface IUserThumbnailProps {
    className?: string;
    id?: string;
    src?: string;
    size?: 'default' | 'small' | 'medium' | 'large';
    placeholder?: string;
    popover?: ITemplate;
    popoverDirection?: 'top' | 'right' | 'bottom' | 'left';
    popoverAlign?: 'top' | 'right' | 'bottom' | 'left' | 'center';
    popoverSpace?: boolean;
    popoverOpen?: boolean;
    popoverMenu?: boolean;
    menuBarTop?: boolean;
    onPopoverClose?: (event: Event) => boolean | void;
    onclick?: (event: MouseEvent) => boolean | void;
}
export default class UserThumbnail extends Component<IUserThumbnailProps> {
    private closeHandle;
    close(event: Event): void;
    afterProps(mounted: boolean): Promise<void>;
    afterDispose(): void;
    render(): JSX.Element;
}
