import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
export declare class FileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    file?: "asc" | "desc" | undefined;
    taskId?: SortOrderInput | undefined;
    task?: TaskOrderByWithRelationInput | undefined;
}
