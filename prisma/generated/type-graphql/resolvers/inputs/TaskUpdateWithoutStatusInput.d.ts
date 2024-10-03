import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskNestedInput } from "../inputs/FileUpdateManyWithoutTaskNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriorityUpdateOneWithoutTaskNestedInput } from "../inputs/PriorityUpdateOneWithoutTaskNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspaceUpdateOneRequiredWithoutTaskNestedInput } from "../inputs/WorkspaceUpdateOneRequiredWithoutTaskNestedInput";
export declare class TaskUpdateWithoutStatusInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    priority?: PriorityUpdateOneWithoutTaskNestedInput | undefined;
    files?: FileUpdateManyWithoutTaskNestedInput | undefined;
    workspace?: WorkspaceUpdateOneRequiredWithoutTaskNestedInput | undefined;
}
