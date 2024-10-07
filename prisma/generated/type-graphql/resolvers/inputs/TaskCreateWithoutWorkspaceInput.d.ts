import { FileCreateNestedManyWithoutTaskInput } from "../inputs/FileCreateNestedManyWithoutTaskInput";
import { PriorityCreateNestedOneWithoutTaskInput } from "../inputs/PriorityCreateNestedOneWithoutTaskInput";
import { StatusCreateNestedOneWithoutTaskInput } from "../inputs/StatusCreateNestedOneWithoutTaskInput";
export declare class TaskCreateWithoutWorkspaceInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: StatusCreateNestedOneWithoutTaskInput | undefined;
    priority?: PriorityCreateNestedOneWithoutTaskInput | undefined;
    files?: FileCreateNestedManyWithoutTaskInput | undefined;
}
