import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskNestedInput } from "../inputs/FileUpdateManyWithoutTaskNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StatusUpdateOneWithoutTaskNestedInput } from "../inputs/StatusUpdateOneWithoutTaskNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspaceUpdateOneWithoutTaskNestedInput } from "../inputs/WorkspaceUpdateOneWithoutTaskNestedInput";
export declare class TaskUpdateWithoutPriorityInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: StatusUpdateOneWithoutTaskNestedInput | undefined;
    files?: FileUpdateManyWithoutTaskNestedInput | undefined;
    workspace?: WorkspaceUpdateOneWithoutTaskNestedInput | undefined;
}
