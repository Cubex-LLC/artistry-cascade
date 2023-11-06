import { Component } from 'cascade';
export interface IEventContainer {
    events: string | string[];
    preventDefault?: boolean;
    stopPropagation?: boolean;
    block?: boolean;
}
export default class EventContainer extends Component<IEventContainer> {
    eventHandler: (event: Event) => void;
    eventsToHash(events: string | string[]): {};
    render(): JSX.Element;
}
