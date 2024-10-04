import { TaskOrderByWithRelationInput } from "../../../inputs/TaskOrderByWithRelationInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
export declare class WorkspaceTaskArgs {
    where?: TaskWhereInput | undefined;
    orderBy?: TaskOrderByWithRelationInput[] | undefined;
    cursor?: TaskWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "message" | "note" | "dueDate" | "createdAt" | "updatedAt" | "statusid" | "workspaceId"> | undefined;
}
