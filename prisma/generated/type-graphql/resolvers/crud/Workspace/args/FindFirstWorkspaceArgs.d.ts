import { WorkspaceOrderByWithRelationInput } from "../../../inputs/WorkspaceOrderByWithRelationInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";
export declare class FindFirstWorkspaceArgs {
    where?: WorkspaceWhereInput | undefined;
    orderBy?: WorkspaceOrderByWithRelationInput[] | undefined;
    cursor?: WorkspaceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "name" | "description" | "createdAt" | "updatedAt" | "userId"> | undefined;
}
