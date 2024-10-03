import { WorkspaceCreateWithoutTaskInput } from "../inputs/WorkspaceCreateWithoutTaskInput";
import { WorkspaceUpdateWithoutTaskInput } from "../inputs/WorkspaceUpdateWithoutTaskInput";
import { WorkspaceWhereInput } from "../inputs/WorkspaceWhereInput";
export declare class WorkspaceUpsertWithoutTaskInput {
    update: WorkspaceUpdateWithoutTaskInput;
    create: WorkspaceCreateWithoutTaskInput;
    where?: WorkspaceWhereInput | undefined;
}
