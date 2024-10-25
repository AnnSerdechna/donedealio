import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { FileUpdateManyWithoutTaskNestedInput } from "../inputs/FileUpdateManyWithoutTaskNestedInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StatusUpdateOneWithoutPriorityTasksNestedInput } from "../inputs/StatusUpdateOneWithoutPriorityTasksNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { WorkspaceUpdateOneWithoutTaskNestedInput } from "../inputs/WorkspaceUpdateOneWithoutTaskNestedInput";
export declare class TaskUpdateWithoutStatusInput {
    id?: StringFieldUpdateOperationsInput | undefined;
    name?: StringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    note?: NullableStringFieldUpdateOperationsInput | undefined;
    dueDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    priority?: StatusUpdateOneWithoutPriorityTasksNestedInput | undefined;
    workspace?: WorkspaceUpdateOneWithoutTaskNestedInput | undefined;
    files?: FileUpdateManyWithoutTaskNestedInput | undefined;
}
