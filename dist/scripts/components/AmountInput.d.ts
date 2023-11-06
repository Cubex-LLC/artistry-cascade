import { Component } from 'cascade';
export declare enum RoundingType {
    None = 0,
    Round = 1,
    Floor = 2,
    Ceiling = 3
}
export interface IAmountInputProps {
    id?: string;
    className?: string;
    value?: number;
    minimum?: number;
    maximum?: number;
    onChange?: (value: number, event: Event) => void | boolean;
    onIncrement?: (value: number, event: MouseEvent) => void | boolean;
    onDecrement?: (value: number, event: MouseEvent) => void | boolean;
    incrementText?: string;
    decrementText?: string;
    incrementIcon?: string;
    decrementIcon?: string;
    defaultValue?: number;
    showReset?: boolean;
    hideIncrementIcon?: boolean;
    hideDecrementIcon?: boolean;
    disabled?: boolean;
    disableDecrement?: boolean;
    disableIncrement?: boolean;
    disableInput?: boolean;
    right?: boolean;
    fill?: boolean;
    round?: RoundingType;
    nonZero?: boolean;
    nonNegative?: boolean;
}
export default class AmountInput extends Component<IAmountInputProps> {
    value: number;
    constructor(props?: IAmountInputProps);
    change: (event: Event) => void;
    increment: (event: MouseEvent) => void;
    decrement: (event: MouseEvent) => void;
    reset: (event: MouseEvent) => void;
    componentWillReceiveProps(props: IAmountInputProps): void;
    render(): JSX.Element;
}
