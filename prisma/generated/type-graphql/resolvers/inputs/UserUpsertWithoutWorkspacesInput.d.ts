import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateWithoutWorkspacesInput } from "../inputs/UserUpdateWithoutWorkspacesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
export declare class UserUpsertWithoutWorkspacesInput {
    update: UserUpdateWithoutWorkspacesInput;
    create: UserCreateWithoutWorkspacesInput;
    where?: UserWhereInput | undefined;
}
