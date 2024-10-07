import { FileCreateNestedManyWithoutTaskInput } from "../inputs/FileCreateNestedManyWithoutTaskInput";
import { PriorityCreateNestedOneWithoutTaskInput } from "../inputs/PriorityCreateNestedOneWithoutTaskInput";
import { WorkspaceCreateNestedOneWithoutTaskInput } from "../inputs/WorkspaceCreateNestedOneWithoutTaskInput";
export declare class TaskCreateWithoutStatusInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    priority?: PriorityCreateNestedOneWithoutTaskInput | undefined;
    files?: FileCreateNestedManyWithoutTaskInput | undefined;
    workspace: WorkspaceCreateNestedOneWithoutTaskInput;
}
