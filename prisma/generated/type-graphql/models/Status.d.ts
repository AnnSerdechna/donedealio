import { Task } from "../models/Task";
import { User } from "../models/User";
import { StatusCount } from "../resolvers/outputs/StatusCount";
export declare class Status {
    id: number;
    name?: string | null;
    color: string;
    type: "STATUS" | "PRIORITY";
    user?: User;
    userId: string;
    priorityTasks?: Task[];
    statusTasks?: Task[];
    _count?: StatusCount | null;
}
