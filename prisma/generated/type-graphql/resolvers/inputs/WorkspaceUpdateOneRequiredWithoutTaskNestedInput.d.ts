import { WorkspaceCreateOrConnectWithoutTaskInput } from "../inputs/WorkspaceCreateOrConnectWithoutTaskInput";
import { WorkspaceCreateWithoutTaskInput } from "../inputs/WorkspaceCreateWithoutTaskInput";
import { WorkspaceUpdateToOneWithWhereWithoutTaskInput } from "../inputs/WorkspaceUpdateToOneWithWhereWithoutTaskInput";
import { WorkspaceUpsertWithoutTaskInput } from "../inputs/WorkspaceUpsertWithoutTaskInput";
import { WorkspaceWhereUniqueInput } from "../inputs/WorkspaceWhereUniqueInput";
export declare class WorkspaceUpdateOneRequiredWithoutTaskNestedInput {
    create?: WorkspaceCreateWithoutTaskInput | undefined;
    connectOrCreate?: WorkspaceCreateOrConnectWithoutTaskInput | undefined;
    upsert?: WorkspaceUpsertWithoutTaskInput | undefined;
    connect?: WorkspaceWhereUniqueInput | undefined;
    update?: WorkspaceUpdateToOneWithWhereWithoutTaskInput | undefined;
}
