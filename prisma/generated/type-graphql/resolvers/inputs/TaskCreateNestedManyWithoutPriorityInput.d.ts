import { TaskCreateManyPriorityInputEnvelope } from "../inputs/TaskCreateManyPriorityInputEnvelope";
import { TaskCreateOrConnectWithoutPriorityInput } from "../inputs/TaskCreateOrConnectWithoutPriorityInput";
import { TaskCreateWithoutPriorityInput } from "../inputs/TaskCreateWithoutPriorityInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedManyWithoutPriorityInput {
    create?: TaskCreateWithoutPriorityInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityInput[] | undefined;
    createMany?: TaskCreateManyPriorityInputEnvelope | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
}
