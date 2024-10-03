import { TaskCreateManyStatusInputEnvelope } from "../inputs/TaskCreateManyStatusInputEnvelope";
import { TaskCreateOrConnectWithoutStatusInput } from "../inputs/TaskCreateOrConnectWithoutStatusInput";
import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutStatusInput {
    create?: TaskCreateWithoutStatusInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutStatusInput[] | undefined;
    createMany?: TaskCreateManyStatusInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
