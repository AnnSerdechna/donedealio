import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskNestedInput } from "../inputs/FileUpdateManyWithoutTaskNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StatusUpdateOneWithoutPriorityTasksNestedInput } from "../inputs/StatusUpdateOneWithoutPriorityTasksNestedInput";
import { StatusUpdateOneWithoutStatusTasksNestedInput } from "../inputs/StatusUpdateOneWithoutStatusTasksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class TaskUpdateWithoutWorkspaceInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    status?: StatusUpdateOneWithoutStatusTasksNestedInput | undefined;
    priority?: StatusUpdateOneWithoutPriorityTasksNestedInput | undefined;
    files?: FileUpdateManyWithoutTaskNestedInput | undefined;
}
