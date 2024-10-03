import { TaskCreateWithoutFilesInput } from "../inputs/TaskCreateWithoutFilesInput";
import { TaskUpdateWithoutFilesInput } from "../inputs/TaskUpdateWithoutFilesInput";
import { TaskWhereInput } from "../inputs/TaskWhereInput";
export declare class TaskUpsertWithoutFilesInput {
    update: TaskUpdateWithoutFilesInput;
    create: TaskCreateWithoutFilesInput;
    where?: TaskWhereInput | undefined;
}
