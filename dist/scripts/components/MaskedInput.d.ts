import { Component, Ref } from 'cascade';
import Mask, { ISelection, IMaskUpdate } from '../util/Mask';
export interface IMaskedInputProps<T> extends Partial<HTMLInputElement> {
    id?: string;
    className?: string;
    mask: string;
    value?: any;
    fill?: boolean;
    oninput?: (event: Event) => (void | boolean);
}
export default class MaskedInput<T> extends Component<IMaskedInputProps<T>> {
    inputRef: Ref<HTMLInputElement>;
    command: boolean;
    mask: Mask;
    value?: string;
    selectionStart?: number;
    selectionEnd?: number;
    constructor(props: IMaskedInputProps<T>, children: any[]);
    updateElement(maskUpdate: IMaskUpdate): void;
    beforeRender(mounted?: boolean): void;
    afterRender(node: Node, mounted: boolean): void;
    onFocus: (event?: FocusEvent) => void;
    onBlur: () => void;
    onClick: (event?: MouseEvent) => void;
    onSelect: (event?: MouseEvent) => void;
    onInput: (event?: Event) => void;
    onKeyDown: (event: KeyboardEvent) => void;
    onKeyUp: (event: KeyboardEvent) => void;
    getSelection(): ISelection;
    rollback(): void;
    render(): JSX.Element;
}
