import { WorkspaceCreateManyUserInputEnvelope } from "../inputs/WorkspaceCreateManyUserInputEnvelope";
import { WorkspaceCreateOrConnectWithoutUserInput } from "../inputs/WorkspaceCreateOrConnectWithoutUserInput";
import { WorkspaceCreateWithoutUserInput } from "../inputs/WorkspaceCreateWithoutUserInput";
import { WorkspaceScalarWhereInput } from "../inputs/WorkspaceScalarWhereInput";
import { WorkspaceUpdateManyWithWhereWithoutUserInput } from "../inputs/WorkspaceUpdateManyWithWhereWithoutUserInput";
import { WorkspaceUpdateWithWhereUniqueWithoutUserInput } from "../inputs/WorkspaceUpdateWithWhereUniqueWithoutUserInput";
import { WorkspaceUpsertWithWhereUniqueWithoutUserInput } from "../inputs/WorkspaceUpsertWithWhereUniqueWithoutUserInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";
export declare class WorkspaceUpdateManyWithoutUserNestedInput {
    create?: WorkspaceCreateWithoutUserInput[] | undefined;
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUserInput[] | undefined;
    upsert?: WorkspaceUpsertWithWhereUniqueWithoutUserInput[] | undefined;
    createMany?: WorkspaceCreateManyUserInputEnvelope | undefined;
    set?: WorkspaceWhereUniqueInput[] | undefined;
    disconnect?: WorkspaceWhereUniqueInput[] | undefined;
    delete?: WorkspaceWhereUniqueInput[] | undefined;
    connect?: WorkspaceWhereUniqueInput[] | undefined;
    update?: WorkspaceUpdateWithWhereUniqueWithoutUserInput[] | undefined;
    updateMany?: WorkspaceUpdateManyWithWhereWithoutUserInput[] | undefined;
    deleteMany?: WorkspaceScalarWhereInput[] | undefined;
}
