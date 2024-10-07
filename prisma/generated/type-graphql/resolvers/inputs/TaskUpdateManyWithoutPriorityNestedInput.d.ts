import { TaskCreateManyPriorityInputEnvelope } from "../inputs/TaskCreateManyPriorityInputEnvelope";
import { TaskCreateOrConnectWithoutPriorityInput } from "../inputs/TaskCreateOrConnectWithoutPriorityInput";
import { TaskCreateWithoutPriorityInput } from "../inputs/TaskCreateWithoutPriorityInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutPriorityInput } from "../inputs/TaskUpdateManyWithWhereWithoutPriorityInput";
import { TaskUpdateWithWhereUniqueWithoutPriorityInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutPriorityInput";
import { TaskUpsertWithWhereUniqueWithoutPriorityInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutPriorityInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutPriorityNestedInput {
    create?: TaskCreateWithoutPriorityInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutPriorityInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutPriorityInput[] | undefined;
    createMany?: TaskCreateManyPriorityInputEnvelope | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutPriorityInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutPriorityInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
