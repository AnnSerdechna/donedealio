import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
export declare class WorkspaceCreateInput {
    id?: string | undefined;
    name: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutWorkspacesInput | undefined;
}
