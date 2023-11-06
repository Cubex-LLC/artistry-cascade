import { Component } from 'cascade';
export interface ISectionViewProps {
}
export default class SectionView extends Component<ISectionViewProps> {
    locked: boolean;
    closed: boolean;
    close: () => void;
    lockContents: () => void;
    render(): JSX.Element;
}
