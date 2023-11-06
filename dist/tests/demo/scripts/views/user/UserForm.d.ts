import { Component } from 'cascade';
import ViewModel from '../../ViewModel';
export interface IUserFormProps {
    viewModel: ViewModel;
}
export default class UserForm extends Component<IUserFormProps> {
    setFirstNameInput: (firstNameInput: HTMLElement) => void;
    addUser(event: any): void;
    onChange(prop: any, event: any): void;
    onKeyDown: (event: any) => void;
    render(): JSX.Element;
}
