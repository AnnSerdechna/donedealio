import { WorkspaceCreateInput } from "../../../inputs/WorkspaceCreateInput";
import { WorkspaceUpdateInput } from "../../../inputs/WorkspaceUpdateInput";
import { WorkspaceWhereUniqueInput } from "../../../inputs/WorkspaceWhereUniqueInput";
export declare class UpsertOneWorkspaceArgs {
    where: WorkspaceWhereUniqueInput;
    create: WorkspaceCreateInput;
    update: WorkspaceUpdateInput;
}
