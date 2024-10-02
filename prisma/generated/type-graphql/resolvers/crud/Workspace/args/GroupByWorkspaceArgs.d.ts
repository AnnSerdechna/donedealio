import { WorkspaceOrderByWithAggregationInput } from "../../../inputs/WorkspaceOrderByWithAggregationInput";
import { WorkspaceScalarWhereWithAggregatesInput } from "../../../inputs/WorkspaceScalarWhereWithAggregatesInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
export declare class GroupByWorkspaceArgs {
    where?: WorkspaceWhereInput | undefined;
    orderBy?: WorkspaceOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "name" | "description" | "createdAt" | "updatedAt" | "userId">;
    having?: WorkspaceScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
