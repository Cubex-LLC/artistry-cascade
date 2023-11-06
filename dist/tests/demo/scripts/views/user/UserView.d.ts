import { Component } from 'cascade';
import ViewModel from '../../ViewModel';
import User from '../../models/User';
export interface IUserViewProps {
    user: User;
    viewModel: ViewModel;
}
export default class UserView extends Component<IUserViewProps> {
    removeUser: () => void;
    render(): JSX.Element;
}
