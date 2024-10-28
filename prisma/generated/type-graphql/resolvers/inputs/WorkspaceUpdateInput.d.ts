import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutWorkspaceNestedInput } from "../inputs/TaskUpdateManyWithoutWorkspaceNestedInput";
import { UserUpdateOneWithoutWorkspacesNestedInput } from "../inputs/UserUpdateOneWithoutWorkspacesNestedInput";
export declare class WorkspaceUpdateInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateManyWithoutWorkspaceNestedInput | undefined;
    user?: UserUpdateOneWithoutWorkspacesNestedInput | undefined;
}
