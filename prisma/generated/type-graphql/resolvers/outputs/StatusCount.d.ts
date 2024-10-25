import { StatusCountPriorityTasksArgs } from "./args/StatusCountPriorityTasksArgs";
import { StatusCountStatusTasksArgs } from "./args/StatusCountStatusTasksArgs";
export declare class StatusCount {
    priorityTasks: number;
    statusTasks: number;
    getPriorityTasks(root: StatusCount, args: StatusCountPriorityTasksArgs): number;
    getStatusTasks(root: StatusCount, args: StatusCountStatusTasksArgs): number;
}
