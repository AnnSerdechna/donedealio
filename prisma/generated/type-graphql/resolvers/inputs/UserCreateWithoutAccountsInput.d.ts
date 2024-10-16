import { WorkspaceCreateNestedManyWithoutUserInput } from "../inputs/WorkspaceCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutAccountsInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified?: Date | undefined;
    password?: string | undefined;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput | undefined;
}
