import { CreateManyAndReturnFileTaskArgs } from "./args/CreateManyAndReturnFileTaskArgs";
import { Task } from "../../models/Task";
export declare class CreateManyAndReturnFile {
    id: number;
    url: string;
    fileId: string;
    name: string;
    taskId: string | null;
    task: Task | null;
    getTask(root: CreateManyAndReturnFile, args: CreateManyAndReturnFileTaskArgs): Task | null;
}
