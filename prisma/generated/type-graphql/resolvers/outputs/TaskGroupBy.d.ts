import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
export declare class TaskGroupBy {
    id: string;
    name: string;
    message: string | null;
    note: string | null;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    statusId: string | null;
    priorityId: string | null;
    workspaceId: string;
    _count: TaskCountAggregate | null;
    _min: TaskMinAggregate | null;
    _max: TaskMaxAggregate | null;
}
