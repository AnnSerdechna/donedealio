import { StatusCreateNestedOneWithoutPriorityTasksInput } from "../inputs/StatusCreateNestedOneWithoutPriorityTasksInput";
import { StatusCreateNestedOneWithoutStatusTasksInput } from "../inputs/StatusCreateNestedOneWithoutStatusTasksInput";
import { WorkspaceCreateNestedOneWithoutTaskInput } from "../inputs/WorkspaceCreateNestedOneWithoutTaskInput";
export declare class TaskCreateWithoutFilesInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: StatusCreateNestedOneWithoutStatusTasksInput | undefined;
    priority?: StatusCreateNestedOneWithoutPriorityTasksInput | undefined;
    workspace?: WorkspaceCreateNestedOneWithoutTaskInput | undefined;
}
