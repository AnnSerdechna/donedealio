import { WorkspaceCreateManyUserInputEnvelope } from "../inputs/WorkspaceCreateManyUserInputEnvelope";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";
export declare class WorkspaceCreateNestedManyWithoutUserInput {
    create?: WorkspaceCreateWithoutUserInput[] | undefined;
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput[] | undefined;
    createMany?: WorkspaceCreateManyUserInputEnvelope | undefined;
    connect?: WorkspaceWhereUniqueInput[] | undefined;
}
