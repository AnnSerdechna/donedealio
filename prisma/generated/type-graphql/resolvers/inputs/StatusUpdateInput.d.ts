import { EnumStatusTypeFieldUpdateOperationsInput } from "../inputs/EnumStatusTypeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutPriorityNestedInput } from "../inputs/TaskUpdateManyWithoutPriorityNestedInput";
import { TaskUpdateManyWithoutStatusNestedInput } from "../inputs/TaskUpdateManyWithoutStatusNestedInput";
import { UserUpdateOneRequiredWithoutStatusNestedInput } from "../inputs/UserUpdateOneRequiredWithoutStatusNestedInput";
export declare class StatusUpdateInput {
    name?: NullableStringFieldUpdateOperationsInput | undefined;
    color?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumStatusTypeFieldUpdateOperationsInput | undefined;
    user?: UserUpdateOneRequiredWithoutStatusNestedInput | undefined;
    priorityTasks?: TaskUpdateManyWithoutPriorityNestedInput | undefined;
    statusTasks?: TaskUpdateManyWithoutStatusNestedInput | undefined;
}
