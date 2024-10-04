import { TaskCreateNestedManyWithoutStatusInput } from "../inputs/TaskCreateNestedManyWithoutStatusInput";
export declare class StatusCreateInput {
    name: string;
    color: string;
    type: "STATUS" | "PRIORITY";
    task?: TaskCreateNestedManyWithoutStatusInput | undefined;
}
