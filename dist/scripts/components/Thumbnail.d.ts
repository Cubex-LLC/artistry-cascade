import { Component } from 'cascade';
export interface IThumbnailProps {
    className?: string;
    id?: string;
    src?: string;
}
export default class Thumbnail extends Component<IThumbnailProps> {
    render(): JSX.Element;
}
