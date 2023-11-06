import { Component } from 'cascade';
export interface ITimePickerProps {
    minuteInterval?: number;
    value: Date;
    onChange: (event: Event, date: Date) => any;
    utc?: boolean;
}
export default class TimePicker extends Component<ITimePickerProps> {
    onChangeHour: (event: Event) => void;
    onChangeMinute: (event: Event) => void;
    onChangeMeridiem: (event: Event) => void;
    render(): JSX.Element;
}
