import { TaskCreateNestedManyWithoutPriorityInput } from "../inputs/TaskCreateNestedManyWithoutPriorityInput";
export declare class PriorityCreateInput {
    name: string;
    color: string;
    task?: TaskCreateNestedManyWithoutPriorityInput | undefined;
}
