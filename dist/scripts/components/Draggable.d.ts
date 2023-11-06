import { Component } from 'cascade';
export interface IDraggableProps {
    item: any;
}
export default class Draggable extends Component<IDraggableProps> {
    dragging: boolean;
    onDrag: () => void;
    onDragEnd: () => void;
    render(): JSX.Element;
}
