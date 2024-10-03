import { TaskCreateManyWorkspaceInputEnvelope } from "../inputs/TaskCreateManyWorkspaceInputEnvelope";
import { TaskCreateOrConnectWithoutWorkspaceInput } from "../inputs/TaskCreateOrConnectWithoutWorkspaceInput";
import { TaskCreateWithoutWorkspaceInput } from "../inputs/TaskCreateWithoutWorkspaceInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutWorkspaceInput } from "../inputs/TaskUpdateManyWithWhereWithoutWorkspaceInput";
import { TaskUpdateWithWhereUniqueWithoutWorkspaceInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutWorkspaceInput";
import { TaskUpsertWithWhereUniqueWithoutWorkspaceInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutWorkspaceInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutWorkspaceNestedInput {
    create?: TaskCreateWithoutWorkspaceInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutWorkspaceInput[] | undefined;
    createMany?: TaskCreateManyWorkspaceInputEnvelope | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutWorkspaceInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutWorkspaceInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
