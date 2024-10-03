import { TaskCreateOrConnectWithoutFilesInput } from "../inputs/TaskCreateOrConnectWithoutFilesInput";
import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskCreateNestedOneWithoutFilesInput {
    create?: TaskCreateWithoutFilesInput | undefined;
    connectOrCreate?: TaskCreateOrConnectWithoutFilesInput | undefined;
    connect?: TaskWhereUniqueInput | undefined;
}
