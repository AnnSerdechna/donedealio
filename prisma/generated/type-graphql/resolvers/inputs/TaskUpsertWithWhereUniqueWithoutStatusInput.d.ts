import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskUpdateWithoutStatusInput } from "../inputs/TaskUpdateWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";
export declare class TaskUpsertWithWhereUniqueWithoutStatusInput {
    where: TaskWhereUniqueInput;
    update: TaskUpdateWithoutStatusInput;
    create: TaskCreateWithoutStatusInput;
}
