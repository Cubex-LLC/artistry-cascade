import User from './models/User';
export default class ViewModel {
    modalOpen: boolean;
    innerModalOpen: boolean;
    users: User[];
    user: User;
    firstNameInput: HTMLElement;
    addUser(): void;
    removeUser(user: User): void;
}
