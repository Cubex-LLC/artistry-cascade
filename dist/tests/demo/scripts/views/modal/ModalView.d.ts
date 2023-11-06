import { Component } from 'cascade';
export interface IModalViewProps {
}
export default class ModalView extends Component<IModalViewProps> {
    modalOpen: boolean;
    modalLock: boolean;
    innerModalOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
    confirmModal: () => void;
    openInnerModal: () => void;
    closeInnerModal: () => void;
    lockModal: () => void;
    render(): JSX.Element;
}
