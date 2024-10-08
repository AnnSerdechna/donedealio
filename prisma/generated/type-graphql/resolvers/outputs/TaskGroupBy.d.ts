import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate";
import { TaskCountAggregate } from "../outputs/TaskCountAggregate";
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate";
import { TaskMinAggregate } from "../outputs/TaskMinAggregate";
import { TaskSumAggregate } from "../outputs/TaskSumAggregate";
export declare class TaskGroupBy {
    id: string;
    name: string;
    message: string | null;
    note: string | null;
    dueDate: Date | null;
    createdAt: Date;
    updatedAt: Date;
    statusId: number | null;
    priorityId: number | null;
    workspaceId: string;
    _count: TaskCountAggregate | null;
    _avg: TaskAvgAggregate | null;
    _sum: TaskSumAggregate | null;
    _min: TaskMinAggregate | null;
    _max: TaskMaxAggregate | null;
}
