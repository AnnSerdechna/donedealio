import { FileCreateNestedManyWithoutTaskInput } from "../inputs/FileCreateNestedManyWithoutTaskInput";
import { StatusCreateNestedOneWithoutPriorityTasksInput } from "../inputs/StatusCreateNestedOneWithoutPriorityTasksInput";
import { StatusCreateNestedOneWithoutStatusTasksInput } from "../inputs/StatusCreateNestedOneWithoutStatusTasksInput";
export declare class TaskCreateWithoutWorkspaceInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: StatusCreateNestedOneWithoutStatusTasksInput | undefined;
    priority?: StatusCreateNestedOneWithoutPriorityTasksInput | undefined;
    files?: FileCreateNestedManyWithoutTaskInput | undefined;
}
