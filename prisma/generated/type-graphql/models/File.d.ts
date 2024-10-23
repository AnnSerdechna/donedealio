import { Task } from "../models/Task";
export declare class File {
    id: number;
    url: string;
    fileId: string;
    name: string;
    task?: Task | null;
    taskId?: string | null;
}
