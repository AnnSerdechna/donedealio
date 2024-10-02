import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { SessionCreateNestedManyWithoutUserInput } from "../inputs/SessionCreateNestedManyWithoutUserInput";
import { WorkspaceCreateNestedManyWithoutUserInput } from "../inputs/WorkspaceCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
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
    sessions?: SessionCreateNestedManyWithoutUserInput | undefined;
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput | undefined;
}
