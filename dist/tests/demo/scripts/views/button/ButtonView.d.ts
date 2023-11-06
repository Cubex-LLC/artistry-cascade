import { Component } from 'cascade';
export interface IButtonViewProps {
}
export default class ButtonView extends Component<IButtonViewProps> {
    locked: boolean;
    popoverOpen: boolean;
    lockButton: () => void;
    openPopover: () => void;
    closePopover: () => void;
    render(): JSX.Element;
}
