import { Task } from "../models/Task";
import { PriorityCount } from "../resolvers/outputs/PriorityCount";
export declare class Priority {
    id: number;
    name: string;
    color: string;
    task?: Task[];
    _count?: PriorityCount | null;
}
