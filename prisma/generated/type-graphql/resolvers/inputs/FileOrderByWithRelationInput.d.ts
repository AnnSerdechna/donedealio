import { SortOrderInput } from "../inputs/SortOrderInput";
import { TaskOrderByWithRelationInput } from "../inputs/TaskOrderByWithRelationInput";
export declare class FileOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    fileId?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    taskId?: SortOrderInput | undefined;
    task?: TaskOrderByWithRelationInput | undefined;
}
