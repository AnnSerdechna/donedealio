import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskNestedInput } from "../inputs/FileUpdateManyWithoutTaskNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriorityUpdateOneWithoutTaskNestedInput } from "../inputs/PriorityUpdateOneWithoutTaskNestedInput";
import { StatusUpdateOneWithoutTaskNestedInput } from "../inputs/StatusUpdateOneWithoutTaskNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TaskUpdateWithoutWorkspaceInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: StatusUpdateOneWithoutTaskNestedInput | undefined;
    priority?: PriorityUpdateOneWithoutTaskNestedInput | undefined;
    files?: FileUpdateManyWithoutTaskNestedInput | undefined;
}
