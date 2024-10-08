import { Task } from "../models/Task";
import { StatusCount } from "../resolvers/outputs/StatusCount";
export declare class Status {
    id: number;
    name: string;
    color: string;
    task?: Task[];
    _count?: StatusCount | null;
}
