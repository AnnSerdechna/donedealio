import { TaskCreateManyStatusInputEnvelope } from "../inputs/TaskCreateManyStatusInputEnvelope";
import { TaskCreateOrConnectWithoutStatusInput } from "../inputs/TaskCreateOrConnectWithoutStatusInput";
import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutStatusInput } from "../inputs/TaskUpdateManyWithWhereWithoutStatusInput";
import { TaskUpdateWithWhereUniqueWithoutStatusInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutStatusInput";
import { TaskUpsertWithWhereUniqueWithoutStatusInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateManyWithoutStatusNestedInput {
    create?: TaskCreateWithoutStatusInput[] | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutStatusInput[] | undefined;
    upsert?: TaskUpsertWithWhereUniqueWithoutStatusInput[] | undefined;
    createMany?: TaskCreateManyStatusInputEnvelope | undefined;
    set?: TaskWhereUniqueInput[] | undefined;
    disconnect?: TaskWhereUniqueInput[] | undefined;
    delete?: TaskWhereUniqueInput[] | undefined;
    connect?: TaskWhereUniqueInput[] | undefined;
    update?: TaskUpdateWithWhereUniqueWithoutStatusInput[] | undefined;
    updateMany?: TaskUpdateManyWithWhereWithoutStatusInput[] | undefined;
    deleteMany?: TaskScalarWhereInput[] | undefined;
}
