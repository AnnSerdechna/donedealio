import { Task } from "../models/Task";
export declare class File {
    id: number;
    file: string;
    task?: Task | null;
    taskId?: string | null;
}
