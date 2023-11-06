import { Component } from 'cascade';
import { INotificationProps } from '../../../../../scripts/modules/ArtistryCascade';
export interface INotificationViewProps {
}
export interface INotification extends INotificationProps {
    text?: string;
}
export interface INotificationViewState {
    items?: {
        [index: number]: INotification;
    };
}
export default class NotificationView extends Component<INotificationViewProps> {
    items?: {
        [index: number]: INotification;
    };
    static currentKey: number;
    pushItem(item: INotification): void;
    pushDefault: () => void;
    pushSuccess: () => void;
    pushInfo: () => void;
    pushWarning: () => void;
    pushDanger: () => void;
    render(): JSX.Element;
}
