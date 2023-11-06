import { Component } from 'cascade';
export type NotificationLocation = 'default' | 'top' | 'right' | 'bottom' | 'left' | 'center-horizontal' | 'center-vertical' | 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';
export interface INotificationContainerProps {
    id?: string;
    className?: string;
    location?: NotificationLocation;
}
export default class NotificationContainer extends Component<INotificationContainerProps> {
    render(): JSX.Element;
}
