import { TaskCreateNestedManyWithoutStatusInput } from "../inputs/TaskCreateNestedManyWithoutStatusInput";
export declare class StatusCreateInput {
    name: string;
    color: string;
    task?: TaskCreateNestedManyWithoutStatusInput | undefined;
}
