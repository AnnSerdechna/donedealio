import { FileCreateNestedManyWithoutTaskInput } from "../inputs/FileCreateNestedManyWithoutTaskInput";
import { StatusCreateNestedOneWithoutTaskInput } from "../inputs/StatusCreateNestedOneWithoutTaskInput";
import { WorkspaceCreateNestedOneWithoutTaskInput } from "../inputs/WorkspaceCreateNestedOneWithoutTaskInput";
export declare class TaskCreateWithoutPriorityInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: StatusCreateNestedOneWithoutTaskInput | undefined;
    files?: FileCreateNestedManyWithoutTaskInput | undefined;
    workspace?: WorkspaceCreateNestedOneWithoutTaskInput | undefined;
}
