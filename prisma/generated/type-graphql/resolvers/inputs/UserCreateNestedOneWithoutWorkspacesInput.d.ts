import { UserCreateOrConnectWithoutWorkspacesInput } from "../inputs/UserCreateOrConnectWithoutWorkspacesInput";
import { UserCreateWithoutWorkspacesInput } from "../inputs/UserCreateWithoutWorkspacesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";
export declare class UserCreateNestedOneWithoutWorkspacesInput {
    create?: UserCreateWithoutWorkspacesInput | undefined;
    connectOrCreate?: UserCreateOrConnectWithoutWorkspacesInput | undefined;
    connect?: UserWhereUniqueInput | undefined;
}
