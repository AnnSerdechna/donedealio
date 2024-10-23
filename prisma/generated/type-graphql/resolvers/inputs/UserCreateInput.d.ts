import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
import { TwoFactorConfirnationCreateNestedOneWithoutUserInput } from "../inputs/TwoFactorConfirnationCreateNestedOneWithoutUserInput";
import { WorkspaceCreateNestedManyWithoutUserInput } from "../inputs/WorkspaceCreateNestedManyWithoutUserInput";
export declare class UserCreateInput {
    id?: string | undefined;
    name: string;
    email: string;
    emailVerified?: Date | undefined;
    password?: string | undefined;
    role?: "ADMIN" | "MEMBER" | "USER" | undefined;
    image?: string | undefined;
    imageId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
    isTwoFactorEnable?: boolean | undefined;
    twoFactorConfirnation?: TwoFactorConfirnationCreateNestedOneWithoutUserInput | undefined;
    accounts?: AccountCreateNestedManyWithoutUserInput | undefined;
    workspaces?: WorkspaceCreateNestedManyWithoutUserInput | undefined;
}
