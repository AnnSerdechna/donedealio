import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutWorkspaceNestedInput } from "../inputs/TaskUpdateManyWithoutWorkspaceNestedInput";
export declare class WorkspaceUpdateWithoutUserInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    task?: TaskUpdateManyWithoutWorkspaceNestedInput | undefined;
}
