import { TaskCreateNestedManyWithoutPriorityInput } from "../inputs/TaskCreateNestedManyWithoutPriorityInput";
import { TaskCreateNestedManyWithoutStatusInput } from "../inputs/TaskCreateNestedManyWithoutStatusInput";
import { UserCreateNestedOneWithoutStatusInput } from "../inputs/UserCreateNestedOneWithoutStatusInput";
export declare class StatusCreateInput {
    id?: string | undefined;
    name?: string | undefined;
    color: string;
    type?: "STATUS" | "PRIORITY" | undefined;
    user: UserCreateNestedOneWithoutStatusInput;
    priorityTasks?: TaskCreateNestedManyWithoutPriorityInput | undefined;
    statusTasks?: TaskCreateNestedManyWithoutStatusInput | undefined;
}
