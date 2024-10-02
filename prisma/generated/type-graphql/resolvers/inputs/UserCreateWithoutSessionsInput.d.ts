import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { WorkspaceCreateNestedManyWithoutUserInput } from "../inputs/WorkspaceCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutSessionsInput {
    id?: string | undefined;
    email: string;
    emailVerified?: Date | undefined;
    firstName: string;
    lastName: string;
    password: string;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput | undefined;
}
