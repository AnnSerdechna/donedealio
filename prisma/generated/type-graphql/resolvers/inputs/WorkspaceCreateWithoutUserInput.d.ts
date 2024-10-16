import { TaskCreateNestedManyWithoutWorkspaceInput } from "../inputs/TaskCreateNestedManyWithoutWorkspaceInput";
export declare class WorkspaceCreateWithoutUserInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    task?: TaskCreateNestedManyWithoutWorkspaceInput | undefined;
}
