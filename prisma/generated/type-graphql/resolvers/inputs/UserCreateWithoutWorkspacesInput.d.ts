import { AccountCreateNestedManyWithoutUserInput } from "../inputs/AccountCreateNestedManyWithoutUserInput";
export declare class UserCreateWithoutWorkspacesInput {
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
}
