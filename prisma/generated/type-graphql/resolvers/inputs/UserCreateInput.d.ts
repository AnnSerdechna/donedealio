import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { WorkspaceCreateNestedManyWithoutUserInput } from "../inputs/WorkspaceCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified?: Date | undefined;
    password?: string | undefined;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput | undefined;
}
