import { Component } from 'cascade';
export interface ICalendarProps {
    date?: Date;
    onSelect?: (date: Date) => any;
}
export default class Calendar extends Component<ICalendarProps> {
    month: number;
    year: number;
    date: Date;
    constructor(props: ICalendarProps, children: any[]);
    increaseMonth: () => void;
    decreaseMonth: () => void;
    increaseYear: () => void;
    decreaseYear: () => void;
    selectDay: (day: any) => void;
    getDays(year: number, month: number): Date[];
    getWeeks(year: number, month: number): Date[][];
    afterProps(updating: boolean): void;
    render(): JSX.Element;
}
