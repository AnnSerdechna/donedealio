import { TaskCreateNestedManyWithoutWorkspaceInput } from "../inputs/TaskCreateNestedManyWithoutWorkspaceInput";
import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
export declare class WorkspaceCreateInput {
    id?: string | undefined;
    name: string;
    description?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    task?: TaskCreateNestedManyWithoutWorkspaceInput | undefined;
    user?: UserCreateNestedOneWithoutWorkspacesInput | undefined;
}
