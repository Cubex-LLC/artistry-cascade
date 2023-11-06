export default class WindowState {
    width: number;
    height: number;
    get screenSize(): ScreenSize;
    resizeHandler: () => void;
    init(): void;
    dispose(): void;
    static getSize(variableName: string): number;
}
export declare enum ScreenSize {
    XSmall = 0,
    Small,
    Medium,
    Large,
    XLarge
}
