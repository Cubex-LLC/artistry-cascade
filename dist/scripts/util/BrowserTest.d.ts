export declare enum Browser {
    Android = "Android",
    BlackBerry = "BlackBerry",
    iOS = "iOS",
    Opera = "Opera",
    Windows = "Windows"
}
export declare class BrowserRegex {
    static readonly Android: RegExp;
    static readonly BlackBerry: RegExp;
    static readonly iOS: RegExp;
    static readonly Opera: RegExp;
    static readonly Windows: RegExp;
}
export default class BrowserTest {
    static readonly Android: RegExpMatchArray;
    static readonly BlackBerry: RegExpMatchArray;
    static readonly iOS: RegExpMatchArray;
    static readonly Opera: RegExpMatchArray;
    static readonly Windows: RegExpMatchArray;
    static testRegex(regex: RegExp): RegExpMatchArray;
}
