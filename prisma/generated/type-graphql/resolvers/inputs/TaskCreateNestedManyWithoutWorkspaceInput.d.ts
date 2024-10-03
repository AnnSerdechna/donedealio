import { TaskCreateManyWorkspaceInputEnvelope } from "../inputs/TaskCreateManyWorkspaceInputEnvelope";
import { TaskCreateOrConnectWithoutWorkspaceInput } from "../inputs/TaskCreateOrConnectWithoutWorkspaceInput";
import { TaskCreateWithoutWorkspaceInput } from "../inputs/TaskCreateWithoutWorkspaceInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutWorkspaceInput {
    create?: TaskCreateWithoutWorkspaceInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutWorkspaceInput[] | undefined;
    createMany?: TaskCreateManyWorkspaceInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
