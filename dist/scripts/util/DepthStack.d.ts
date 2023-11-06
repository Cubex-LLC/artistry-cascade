export interface ICloseHandle {
    (event: Event): boolean | void;
}
export interface ICloseItem {
    close: ICloseHandle;
    confirm: ICloseHandle;
}
export default class DepthStack {
    static items: ICloseItem[];
    static push(close: ICloseHandle, confirm?: ICloseHandle): void;
    static remove(close: ICloseHandle): void;
    static close(event: Event): void;
    static confirm(event: Event): void;
    static init(): void;
    static blur(): void;
}
