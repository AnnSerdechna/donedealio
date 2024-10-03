import { TaskCountFilesArgs } from "./args/TaskCountFilesArgs";
export declare class TaskCount {
    files: number;
    getFiles(root: TaskCount, args: TaskCountFilesArgs): number;
}
