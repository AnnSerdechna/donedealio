import { WorkspaceOrderByWithRelationInput } from "../../../inputs/WorkspaceOrderByWithRelationInput";
import { WorkspaceWhereInput } from "../../../inputs/WorkspaceWhereInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";
export declare class AggregateWorkspaceArgs {
    where?: WorkspaceWhereInput | undefined;
    orderBy?: WorkspaceOrderByWithRelationInput[] | undefined;
    cursor?: WorkspaceWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
