import { UserCreateOrConnectWithoutWorkspacesInput } from "../inputs/UserCreateOrConnectWithoutWorkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserUpdateToOneWithWhereWithoutWorkspacesInput } from "../inputs/UserUpdateToOneWithWhereWithoutWorkspacesInput";
import { UserUpsertWithoutWorkspacesInput } from "../inputs/UserUpsertWithoutWorkspacesInput";
import { UserWhereInput } from "../inputs/UserWhereInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserUpdateOneWithoutWorkspacesNestedInput {
    create?: UserCreateWithoutWorkspacesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput | undefined;
    upsert?: UserUpsertWithoutWorkspacesInput | undefined;
    disconnect?: UserWhereInput | undefined;
    delete?: UserWhereInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
    update?: UserUpdateToOneWithWhereWithoutWorkspacesInput | undefined;
}
