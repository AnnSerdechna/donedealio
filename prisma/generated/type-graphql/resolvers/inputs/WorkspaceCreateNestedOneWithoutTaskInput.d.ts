import { WorkspaceCreateOrConnectWithoutTaskInput } from "../inputs/WorkspaceCreateOrConnectWithoutTaskInput";
import { WorkspaceCreateWithoutTaskInput } from "../inputs/WorkspaceCreateWithoutTaskInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";
export declare class WorkspaceCreateNestedOneWithoutTaskInput {
    create?: WorkspaceCreateWithoutTaskInput | undefined;
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTaskInput | undefined;
    connect?: WorkspaceWhereUniqueInput | undefined;
}
