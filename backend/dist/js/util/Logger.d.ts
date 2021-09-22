export class Logger {
    static debugOn: boolean;
    static debugDepth: number;
    static logFile: null;
    static getLogFile(): null;
    static log(message: any, debugDepth?: number): void;
    static setLevel(newLevel: any): void;
    static setOn(): void;
    static setOff(): void;
}
