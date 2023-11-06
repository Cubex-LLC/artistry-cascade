import { Component } from 'cascade';
export interface ICalendarViewProps {
}
export default class CalendarView extends Component<ICalendarViewProps> {
    date: Date;
    render(): JSX.Element;
}
