import { Component } from 'cascade';
export type GridSize = 'none' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
export interface IGridProps {
    className?: string;
    id?: string;
    columns?: number;
    screenSize?: GridSize;
    fillWidth?: boolean;
    space?: boolean;
}
export default class Grid extends Component<IGridProps> {
    render(): JSX.Element;
}
export interface IGridExternalProps {
    grid?: boolean;
    gridColumns?: number;
    gridSize?: GridSize;
    gridSpace?: boolean;
}
export declare function gridConfig(classNames: string[], props: IGridExternalProps): void;
