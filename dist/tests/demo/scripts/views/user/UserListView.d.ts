import { Component } from 'cascade';
import ViewModel from '../../ViewModel';
export interface IUserListViewProps {
    viewModel: ViewModel;
}
export default class UserListView extends Component<IUserListViewProps> {
    render(): JSX.Element;
}
