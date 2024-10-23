import { FileCreateNestedManyWithoutTaskInput } from "../inputs/FileCreateNestedManyWithoutTaskInput";
import { PriorityCreateNestedOneWithoutTaskInput } from "../inputs/PriorityCreateNestedOneWithoutTaskInput";
import { StatusCreateNestedOneWithoutTaskInput } from "../inputs/StatusCreateNestedOneWithoutTaskInput";
import { WorkspaceCreateNestedOneWithoutTaskInput } from "../inputs/WorkspaceCreateNestedOneWithoutTaskInput";
export declare class TaskCreateInput {
    id?: string | undefined;
    name: string;
    message?: string | undefined;
    note?: string | undefined;
    dueDate?: Date | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    status?: StatusCreateNestedOneWithoutTaskInput | undefined;
    priority?: PriorityCreateNestedOneWithoutTaskInput | undefined;
    workspace?: WorkspaceCreateNestedOneWithoutTaskInput | undefined;
    files?: FileCreateNestedManyWithoutTaskInput | undefined;
}
