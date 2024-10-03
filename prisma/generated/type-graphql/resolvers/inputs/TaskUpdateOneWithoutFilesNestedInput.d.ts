import { TaskCreateOrConnectWithoutFilesInput } from "../inputs/TaskCreateOrConnectWithoutFilesInput";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskUpdateToOneWithWhereWithoutFilesInput } from "../inputs/TaskUpdateToOneWithWhereWithoutFilesInput";
import { TaskUpsertWithoutFilesInput } from "../inputs/TaskUpsertWithoutFilesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpdateOneWithoutFilesNestedInput {
    create?: TaskCreateWithoutFilesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutFilesInput | undefined;
    upsert?: TaskUpsertWithoutFilesInput | undefined;
    disconnect?: TaskWhereInput | undefined;
    delete?: TaskWhereInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
    update?: TaskUpdateToOneWithWhereWithoutFilesInput | undefined;
}
