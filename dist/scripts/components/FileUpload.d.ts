import { Component, Ref } from 'cascade';
export interface IFileUploadProps {
    id?: string;
    className?: string;
    onSelect: (files: FileList) => Promise<any>;
    value?: string;
    text?: string;
}
export default class FileUpload extends Component<IFileUploadProps> {
    dragging?: boolean;
    uploading?: boolean;
    fileInput: Ref<HTMLInputElement>;
    handleFiles: (files: FileList) => Promise<void>;
    click: () => void;
    select: () => void;
    drop: (event: DragEvent) => void;
    dragEnter: (event: DragEvent) => void;
    dragLeave: (event: DragEvent) => void;
    render(): JSX.Element;
}
