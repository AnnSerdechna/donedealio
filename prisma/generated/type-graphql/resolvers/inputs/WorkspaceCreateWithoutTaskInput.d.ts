import { UserCreateNestedOneWithoutWorkspacesInput } from "../inputs/UserCreateNestedOneWithoutWorkspacesInput";
export declare class WorkspaceCreateWithoutTaskInput {
    id?: string | undefined;
    name: string;
    description: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    user?: UserCreateNestedOneWithoutWorkspacesInput | undefined;
}