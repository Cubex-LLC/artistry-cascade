import { Component } from 'cascade';
import { INotification } from '../util/NotificationUtil';
import { Animation } from '../abilities/Animatable';
export interface INotificationProps extends INotification {
    id?: string;
    className?: string;
    clickable?: boolean;
    animation?: Animation;
    allowDelay?: boolean;
    onClick?: () => any;
    onClose?: () => any;
}
export default class Notification extends Component<INotificationProps> {
    hide: boolean;
    decayCounter: number;
    constructor(props: INotificationProps, children?: any[]);
    startDecay: () => Promise<void>;
    endDecay: (event: AnimationEvent) => Promise<void>;
    stopDecay: () => void;
    render(): JSX.Element;
}
