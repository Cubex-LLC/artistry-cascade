import { Component } from 'cascade';
import Calendar, { ICalendarProps } from './Calendar';
export { Calendar, ICalendarProps };
export interface IDatePickerProps {
    id?: string;
    className?: string;
    mask?: string;
    date: Date | string;
    fill?: boolean;
    onSelect: (date: Date) => void;
}
export default class DatePicker extends Component<IDatePickerProps> {
    onSelect: (date: Date) => void;
    onChange: (event: Event) => void;
    render(): JSX.Element;
}
